import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { SelectoBoxComponent } from './selecto-box/selecto-box.component';

const components = [
  RadioButtonsComponent,
  CheckboxGroupComponent,
  InputBoxComponent,
  SelectoBoxComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UiKitFormModule { }
