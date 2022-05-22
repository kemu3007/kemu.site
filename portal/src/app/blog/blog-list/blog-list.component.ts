import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, Label } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent implements OnInit {
  articles: Record<string, Article> = {};

  pageSize = 10;
  pageIndex = 0;

  constructor(private router: Router, private articleService: ArticlesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleService.getList('/assets/articles/list.json').subscribe((articles) => (this.articles = articles));
    const page = this.route.snapshot.queryParamMap.get('page');
    if (page) {
      this.pageIndex = Number(page);
    }
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  get searchData() {
    const data: Record<string, string> = {};
    Object.keys(this.articles).forEach((key) => {
      const title = `${this.articles[key].title} | ${this.getLabels(this.articles[key])[0].name}`;
      data[title] = key;
    });
    return data;
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 5 : 1;
  }

  getLabels(article: Article): Label[] {
    return article.labels.filter((label) => label.name !== 'article');
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    return text$
      .pipe(debounceTime(200), distinctUntilChanged())
      .pipe(
        map((text) => Object.keys(this.searchData).filter((title) => title.toLowerCase().includes(text.toLowerCase())))
      );
  };

  selectArticle(event: NgbTypeaheadSelectItemEvent) {
    this.router.navigate(['/blog', this.searchData[event.item]]);
  }

  switchPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.router.navigate([], { queryParams: { page: this.pageIndex } });
  }

  get displayArticles() {
    const startIndex = this.pageIndex * this.pageSize;
    return this.articleKeys.slice(startIndex, startIndex + this.pageSize);
  }
}
