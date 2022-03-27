import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetBtnComponent } from './tweet-btn/tweet-btn.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { LoadingComponent } from './loading/loading.component';
import { AdsenseModule } from 'ng2-adsense';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { environment } from '@environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AmazonAdsComponent } from './amazon-ads/amazon-ads.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdescapePipe } from './pipes/mdescape.pipe';

@NgModule({
  declarations: [
    TweetBtnComponent,
    MessageComponent,
    LoadingComponent,
    NavComponent,
    AmazonAdsComponent,
    MdescapePipe,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AdsenseModule.forRoot({ adClient: environment.adClient }),
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    TweetBtnComponent,
    NgbModule,
    MessageComponent,
    LoadingComponent,
    AdsenseModule,
    NavComponent,
    HttpClientModule,
    AmazonAdsComponent,
    ReactiveFormsModule,
    MdescapePipe,
  ],
})
export class SharedModule {}
