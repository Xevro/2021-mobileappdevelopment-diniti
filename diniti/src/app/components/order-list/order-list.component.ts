import {Component, Input, OnInit} from '@angular/core';
import {OrderFilterOptions, Orders} from '../../models/backend-models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  @Input() orders: Orders;
  orderFilterStatus = OrderFilterOptions;
  filterStatus: OrderFilterOptions = OrderFilterOptions.empty;

  constructor() {
  }

  ngOnInit() {
  }

  statusChanged(status: any) {
    console.log(status.target.value);
    //this.changedStatus = true;
    // this.order.status = status.target.value;
  }
}
