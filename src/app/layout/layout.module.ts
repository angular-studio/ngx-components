import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';

const components = [
  MainLayoutComponent,
  SidebarLayoutComponent,
  LayoutWrapperComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
