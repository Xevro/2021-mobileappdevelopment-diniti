import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FieldTypes} from '../../models/ui-models';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {

  @Input() placeholder: string;
  @Input() fieldType: FieldTypes = FieldTypes.text;
  @Input() name: string;
  @Input() value = null;

  @Output() onInputChange = new EventEmitter<string>();

  constructor() {
  }

  ionViewWillEnter() {
  }

  onChange() {
    this.onInputChange.emit(this.value);
  }
}
