import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getOrderSummaryUrl() {
    return Routes.userOrderCreateSummary;
  }
}
