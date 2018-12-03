import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent implements OnInit {
  @Input() pages: [];
  constructor() { }

  ngOnInit() {
  }

}
