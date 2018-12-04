import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormModule { }
