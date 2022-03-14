import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import articles from '@assets/articles/list.json';
import { Article, Label } from '../models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  constructor(titleService: Title, private router: Router) {
    titleService.setTitle('kemu tech blog');
  }

  get articles(): Record<string, Article> {
    return articles;
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? Math.floor(Object.keys(this.articles).length / 2) : 1;
  }

  getLabels(article: Article): Label[] {
    return article.labels.filter((label) => label.name !== 'article');
  }

  transitToDetail(id: string) {
    this.router.navigate(['/blog', id]);
  }
}