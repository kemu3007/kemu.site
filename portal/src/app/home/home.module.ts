import { NgModule } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { NewsComponent } from './news/news.component';
import { SharedModule } from '@app/shared/shared.module';
import { ToolsListComponent } from './tools-list/tools-list.component';

@NgModule({
  declarations: [IndexComponent, ContactComponent, NewsComponent, ToolsListComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, RecaptchaModule, SharedModule],
  providers: [KeyValuePipe],
})
export class HomeModule {}
