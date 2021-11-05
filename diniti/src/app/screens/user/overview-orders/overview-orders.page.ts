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
  loading = false;

  constructor(
    private router: Router,
    private ordersProxyService: OrdersProxyService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loading = true;
    this.ordersProxyService.getOrdersAction(this.authenticationService.getObjectId())
      .subscribe(
        (response) => {
          this.orders = response;
          this.loading = false;
        },
        (error) => {
        });
  }

  createOrder() {
    this.router.navigate(Routes.userOrderCreate);
  }
}
