import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/backend-models';
import {ActivatedRoute} from '@angular/router';
import {OrdersProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {Role} from '../../../models/authentication-models';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  order: Order;
  loading = false;
  role = Role;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersProxyService: OrdersProxyService,
    public authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.getOrderData();
  }

  getOrderData() {
    this.loading = true;
    this.ordersProxyService.getOrderByIdAction(this.activatedRoute.snapshot.params.orderUuid)
      .subscribe(
        (response) => {
          this.order = response?.results[0];
          this.loading = false;
        },
        (error) => {
        });
  }
}
