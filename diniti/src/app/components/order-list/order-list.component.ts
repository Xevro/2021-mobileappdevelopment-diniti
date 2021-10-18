import {Component, Input, OnInit} from '@angular/core';
import {Orders} from '../../models/backend-models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  @Input() orders: Orders;

  constructor() {
  }

  ngOnInit() {
  }

}
