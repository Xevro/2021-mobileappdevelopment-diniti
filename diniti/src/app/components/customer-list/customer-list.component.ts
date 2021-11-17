import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User, Users} from '../../models/backend-models';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {

  @Input() customers: User[];
  @Input() filterTerm: string;

  @Output() changedCustomersList = new EventEmitter<Users>();

  constructor() {
  }

  ionViewWillEnter() {
  }

  changedCustomers(customersList: any) {
    this.changedCustomersList.emit(customersList);
  }

}
