import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { UiKitFormModule } from '../../../components/form/form.module';

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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UiKitFormModule
  ]
})
export class FormModule { }
