import { Component, OnInit } from '@angular/core';
import { LayoutPageService } from '../layout-page.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {
  pages: Array<any> = [];
  constructor(
    private layoutPageService: LayoutPageService
  ) { }

  ngOnInit() {
    this.layoutPageService.getLayoutData().subscribe(data => {
      this.pages = data;
    });
  }

}
