import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleDetail } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  url = '/assets/articles/';

  marked = this.markedService.marked;
  articles: Record<string, Article> = {};
  _article?: ArticleDetail;
  html: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private markedService: MarkedService,
    private sanitizer: DomSanitizer,
    private articlesService: ArticlesService,
    private router: Router
  ) {
    if (this.isTranslated) {
      this.url = this.url + this.route.snapshot.data['lang'] + '/';
    }
  }

  get isTranslated() {
    return this.route.snapshot.data['lang'] !== 'ja';
  }

  get originalUrl() {
    return ['/blog', this.issueId];
  }

  get article() {
    return this._article;
  }

  set article(article: ArticleDetail | undefined) {
    if (article) {
      this._article = article;
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

  get issueId() {
    return this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.articlesService.getList(`${this.url}list.json`).subscribe((articles) => (this.articles = articles));
    this.articlesService.get(`${this.url}${this.issueId}.json`).subscribe((article) => (this.article = article));
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }

  get articleIds(): string[] {
    return Object.keys(this.articles);
  }

  navigateByIssueId(issueId: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['../', issueId], { relativeTo: this.route });
  }

  get nextArticleId(): string | null {
    if (this.articleIds.length) {
      const nextIds = this.articleIds
        .map((issueId) => Number(issueId))
        .filter((issueId) => issueId > Number(this.issueId));
      if (nextIds.length) {
        return Math.min(...nextIds).toString();
      }
      return null;
    }
    return null;
  }

  get pastArticleId(): string | null {
    if (this.articleIds.length) {
      const pastIds = this.articleIds
        .map((issueId) => Number(issueId))
        .filter((issueId) => issueId < Number(this.issueId));
      if (pastIds.length) {
        return Math.max(...pastIds).toString();
      }
      return null;
    }
    return null;
  }
}
