import {Component, Input, OnInit} from '@angular/core';
import {FieldTypes} from '../../models/field-types.enum';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {

  @Input() placeholder: string;
  @Input() fieldType: FieldTypes = FieldTypes.text;
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
