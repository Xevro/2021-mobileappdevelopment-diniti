import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/backend-models';
import {ActivatedRoute} from '@angular/router';
import {OrdersProxyService} from '../../../services/backend-services';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  order: Order;
  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersProxyService: OrdersProxyService
  ) {
  }

  ngOnInit() {
    this.getOrderData();
  }

  getOrderData() {
    this.loading = true;
    this.ordersProxyService.getOrderByIdAction(this.activatedRoute.snapshot.params.orderId)
      .subscribe(
        (response) => {
          this.order = response?.results[0];
          this.loading = false;
        },
        (error) => {
        });
  }
}
