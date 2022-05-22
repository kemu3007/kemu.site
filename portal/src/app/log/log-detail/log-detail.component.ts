import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetail } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { Comment } from '@app/shared/articles/comments';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss'],
})
export class LogDetailComponent implements OnInit {
  marked = this.markedService.marked;
  html: SafeHtml = '';
  _article?: ArticleDetail;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private markedService: MarkedService,
    private sanitizer: DomSanitizer,
    private articlesService: ArticlesService
  ) {}

  get article() {
    return this._article;
  }

  set article(article: ArticleDetail | undefined) {
    if (article) {
      this._article = article;
      this.breadcrumbService.breadcrumb = `/log/${article.title}`;
      this.html = this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(article.body));
      if (this.route.snapshot.fragment) {
        interval(100)
          .pipe(take(1))
          .subscribe((_) => {
            window.location.replace(
              `${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`
            );
          });
      }
    }
  }

  ngOnInit(): void {
    this.articlesService.get(`/assets/logs/${this.issueId}.json`).subscribe((article) => (this.article = article));
    this.articlesService
      .getComments(`/assets/comments/${this.issueId}.json`)
      .subscribe((comments) => (this.comments = comments));
  }

  get issueId() {
    return this.route.snapshot.paramMap.get('id');
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}
