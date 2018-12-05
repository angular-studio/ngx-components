import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      item: []
    });

    const itemVal = {
      value: 1,
      options: [
        {label: 'a', value: 2},
        {label: 'b', value: 1},
      ]
    };
    this.group.get('item').patchValue(itemVal);
  }

}
