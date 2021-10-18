import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';
import {OrdersProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {Orders} from '../../../models/backend-models';

@Component({
  selector: 'app-overview-orders',
  templateUrl: './overview-orders.page.html',
  styleUrls: ['./overview-orders.page.scss'],
})
export class OverviewOrdersPage implements OnInit {

  orders: Orders;

  constructor(
    private router: Router,
    private ordersProxyService: OrdersProxyService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.ordersProxyService.getOrdersAction(this.authenticationService.getObjectId())
      .subscribe(
        (response) => {
          this.orders = response;
        },
        (error) => {
        });
  }

  createOrder() {
    this.router.navigate(Routes.userOrderCreate);
  }

}
