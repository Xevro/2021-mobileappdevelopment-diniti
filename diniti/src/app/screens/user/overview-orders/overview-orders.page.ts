import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';
import {OrdersProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';

@Component({
  selector: 'app-overview-orders',
  templateUrl: './overview-orders.page.html',
  styleUrls: ['./overview-orders.page.scss'],
})
export class OverviewOrdersPage implements OnInit {

  constructor(
    private router: Router,
    private ordersProxyService: OrdersProxyService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.ordersProxyService.getOrdersAction(this.authenticationService.getObjectId())
      .subscribe(
        (response) => {
          console.log(response.results[0]);
          //const date = new Date(response.results[0].pickUpTime.iso);
          //console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
        },
        (error) => {
        });
  }

  createOrder() {
    this.router.navigate(Routes.userOrderCreate);
  }

}
