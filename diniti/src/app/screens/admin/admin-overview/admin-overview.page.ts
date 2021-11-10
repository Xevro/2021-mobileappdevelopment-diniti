import {Component} from '@angular/core';
import {Orders} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {OrdersProxyService} from '../../../services/backend-services';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.page.html',
  styleUrls: ['./admin-overview.page.scss'],
})
export class AdminOverviewPage {
  orders: Orders;
  loading = false;

  constructor(
    private router: Router,
    private ordersProxyService: OrdersProxyService
  ) {
  }

  ionViewWillEnter() {
    this.getOrders();
  }

  getOrders(event?: any) {
    this.loading = true;
    this.ordersProxyService.getAllOrdersAction()
      .subscribe(
        (response) => {
          this.orders = response;
          this.loading = false;
          event?.target.complete();
        },
        (error) => {
          console.log('orders error probleem');
          console.log(error);
        });
  }
}
