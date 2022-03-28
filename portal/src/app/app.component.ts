import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoadingService } from './shared/loading/loading.service';
import { MessageService } from './shared/message/message.service';
import { BreadcrumbService } from './shared/nav/breadcrumb.service';
import version from '@assets/version.json';
import { AdsModalService } from './shared/ads-modal/ads-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
    { name: 'log', to: '/log' },
    { name: 'contact', to: '/contact' },
  ];
  adsCount = 0;

  constructor(
    titleService: Title,
    router: Router,
    messageService: MessageService,
    breadcrumbService: BreadcrumbService,
    private adsModalService: AdsModalService,
    private loadingService: LoadingService
  ) {
    titleService.setTitle('kemu portal');
    router.events.pipe().subscribe((event) => {
      if (event instanceof NavigationStart) {
        loadingService.loading = true;
      } else if (event instanceof NavigationEnd) {
        loadingService.loading = false;
        breadcrumbService.breadcrumb = event.url;
        this.displayOrWaitAds();
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        messageService.pushMessage({
          type: 'danger',
          body: `ページが見つかりませんでした。o(･ω･ = ･ω･)o '${event.url}'`,
        });
        router.navigate(['']);
      }
    });
    console.log('%c 👀 why are you seeing this console?', 'background: black; color: white;');
  }

  get loading() {
    return this.loadingService.loading;
  }

  get releaseDate() {
    return version['last-release'];
  }

  displayOrWaitAds() {
    if (this.adsCount === 3) {
      this.adsModalService.open();
      this.adsCount = 0;
    }
    this.adsCount += 1;
  }
}
