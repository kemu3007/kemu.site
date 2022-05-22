import { AmazonAssociateComponent } from './amazon-associate/amazon-associate.component';
import { Base64Component } from './base64/base64.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonTyperComponent } from './json-typer/json-typer.component';
import { MdwriterComponent } from './mdwriter/mdwriter.component';
import { MermaidComponent } from './mermaid/mermaid.component';
import { OpenapiComponent } from './openapi/openapi.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { RegexComponent } from './regex/regex.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { YearCheckComponent } from './year-check/year-check.component';
import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ToolsListComponent,
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
  },
  {
    path: 'amazonAssociate',
    component: AmazonAssociateComponent,
  },
  {
    path: 'jsonTyper',
    component: JsonTyperComponent,
  },
  {
    path: 'realtime',
    component: RealtimeComponent,
  },
  {
    path: 'jsonFormatter',
    component: JsonFormatterComponent,
  },
  {
    path: 'base64',
    component: Base64Component,
  },
  {
    path: 'mdwriter',
    component: MdwriterComponent,
  },
  {
    path: 'regex',
    component: RegexComponent,
  },
  {
    path: 'year',
    component: YearCheckComponent,
  },
  {
    path: 'openapi',
    component: OpenapiComponent,
  },
  {
    path: 'mermaid',
    component: MermaidComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DecimalPipe],
})
export class ToolsRoutingModule {}
