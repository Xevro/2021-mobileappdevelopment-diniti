import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
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
  @Input() value: string = null;

  @Output() onInputChange = new EventEmitter<string>();
  inputValue: string = null;

  constructor() {
  }

  ngOnInit() {
  }

  onChange() {
    this.onInputChange.emit(this.inputValue);
  }
}
