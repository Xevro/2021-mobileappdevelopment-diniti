import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() buttonText: string;
  @Input() invertColor: boolean = false;
  @Input() disabled: boolean = false;

  constructor() {
  }

  ionViewWillEnter() {
  }

}
