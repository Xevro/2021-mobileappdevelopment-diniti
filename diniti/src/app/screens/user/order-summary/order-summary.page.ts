import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getOrderCompleteUrl() {
    return Routes.orderComplete;
  }

}
