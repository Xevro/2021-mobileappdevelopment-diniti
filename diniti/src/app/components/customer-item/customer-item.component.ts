import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/backend-models';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss'],
})
export class CustomerItemComponent {

  @Input() customer: User;

  @Output() changedCustomer = new EventEmitter<User>();

  constructor() {
  }

  ionViewWillEnter() {
  }

}
