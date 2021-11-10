import {Component, Input} from '@angular/core';
import {Orders} from '../../models/backend-models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {

  @Input() orders: Orders;

  constructor() {
  }

  ionViewWillEnter() {
  }
}
