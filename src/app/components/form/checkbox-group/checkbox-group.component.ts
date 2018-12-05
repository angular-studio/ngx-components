import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
  NG_VALIDATORS,
  FormControl,
  FormArray,
  Validator
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export interface CheckboxItem {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true,
    }
  ]
})
export class CheckboxGroupComponent implements OnInit, ControlValueAccessor, Validator {
  inputGroups: FormGroup;
  radioButtonValue: Array<CheckboxItem>;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.inputGroups = this.formBuilder.group({
      inputs : this.formBuilder.array([])
    });
    this.inputGroups.valueChanges
    .pipe(debounceTime(100))
    .subscribe(res => {
      this.propagateChange(res.inputs);
    });
  }

  get inputs() {
    return this.inputGroups.get('inputs') as FormArray;
  }

  private createItem(item) {
    this.inputs.push(this.formBuilder.group({
      label: item.label,
      value: item.value,
      checked: item.checked
    }));
  }

  writeValue(value: CheckboxItem[]) {
    if (value !== undefined) {
     value.forEach(item => this.createItem(item));
    }
  }

  validate(c: FormControl) {
    return null;
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
