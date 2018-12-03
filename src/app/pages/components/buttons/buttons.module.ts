import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
  },
];

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ButtonsModule { }
