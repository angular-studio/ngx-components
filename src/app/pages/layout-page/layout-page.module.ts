import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '../../layout/layout.module';
import { LayoutPageService } from './layout-page.service';
import { LayoutPageComponent } from './layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'buttons',
        loadChildren: '../components/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'form',
        loadChildren: '../components/form/form.module#FormModule'
      },
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  declarations: [LayoutPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
  providers: [
    LayoutPageService
  ]
})
export class LayoutPageModule { }
