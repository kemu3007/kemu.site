import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Tool } from '@app/shared/tools/tools';
import { ToolsService } from '@app/shared/tools/tools.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  tools: Tool[] = [];

  constructor(
    title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private toolsService: ToolsService
  ) {
    title.setTitle('Kemu Portal');
  }

  ngOnInit(): void {
    this.toolsService.get().subscribe((tools) => (this.tools = tools));
  }
}
