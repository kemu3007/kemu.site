import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AdsenseModule.forRoot({ adClient: 'ca-pub-6219032039771696' }),
  ],
})
export class BlogModule {}