import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  group: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.group = this.formBuilder.group({
      radio: [],
      checkbox: [[], Validators.required]
    });

    const radio = {
      value: 1,
      options: [
        {label: 'a', value: 2},
        {label: 'b', value: 1},
      ]
    };
    const checkbox = [
      {label: 'a', value: 2, checked: true},
      {label: 'b', value: 1, checked: false},
    ];
    this.group.get('radio').patchValue(radio);
    this.group.get('checkbox').patchValue(checkbox);


    this.group.valueChanges.subscribe(value => {
      console.log('form value', value);
    });
  }

}
