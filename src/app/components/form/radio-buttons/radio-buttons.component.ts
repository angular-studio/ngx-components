import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
  NG_VALIDATORS,
  FormControl,
  Validator
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export interface RadioButtonItem {
  label: string;
  value: string | number;
}

export interface RadioButtonValue {
  value: string;
  options: Array<RadioButtonItem>;
}


@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RadioButtonsComponent),
      multi: true,
    }
  ]
})
export class RadioButtonsComponent implements OnInit, ControlValueAccessor, Validator {
  inputGroups: FormGroup;
  radioButtonValue: RadioButtonValue;
  list = [];
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.inputGroups = this.formBuilder.group({
      inputs : []
    });
    this.inputGroups.valueChanges
    .pipe(debounceTime(100))
    .subscribe(res => {
      const value = {
        value: res.inputs,
        options: this.list
      };
      this.propagateChange(value);
    });
  }

  writeValue(value: RadioButtonValue) {
    if (value !== undefined) {
     this.list = value.options;
     this.inputGroups.get('inputs').patchValue(value.value);
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
