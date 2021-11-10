import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';
import {OrdersProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {OrderFilterDates, OrderFilterOptions, Orders} from '../../../models/backend-models';

@Component({
  selector: 'app-overview-orders',
  templateUrl: './overview-orders.page.html',
  styleUrls: ['./overview-orders.page.scss'],
})
export class OverviewOrdersPage {

  orders: Orders;
  originalOrders: Orders;
  loading = false;

  orderFilterStatus = OrderFilterOptions;
  filterStatus: OrderFilterOptions = OrderFilterOptions.empty;

  dateFilterOptions = OrderFilterDates;
  dateFilter: OrderFilterDates = OrderFilterDates.Ascending;

  constructor(
    private router: Router,
    private ordersProxyService: OrdersProxyService,
    private authenticationService: AuthenticationService) {
  }

  ionViewWillEnter() {
    this.loading = true;
    this.ordersProxyService.getOrdersAction(this.authenticationService.getObjectId())
      .subscribe(
        (response) => {
          this.orders = response;
          this.originalOrders = response;
          this.orders.results.sort((first, second) => {
            const startDate = new Date(first.pickUpTime.iso).getTime();
            const secondDate = new Date(second.pickUpTime.iso).getTime();
            return ((startDate > secondDate) ? -1 : (startDate < secondDate) ? 1 : 0);
          });
          this.loading = false;
        },
        (error) => {
          console.log('fix probleem bij overview orders user');
          console.log(error);
        });
  }

  createOrder() {
    this.router.navigate(Routes.userOrderCreate);
  }

  statusChanged(status) {
    if (status.target.value === OrderFilterOptions.pending) {
      this.orders.results.sort((first, second) => (first.status > second.status) ? -1 : (first.status < second.status) ? 1 : 0);
    }
    if (status.target.value === OrderFilterOptions.closed) {
      this.orders.results.sort((first, second) => (first.status < second.status) ? -1 : (first.status > second.status) ? 1 : 0);
    }
    if (status.target.value === OrderFilterOptions.empty) {
      this.orders = this.originalOrders;
    }
  }

  sortOnDate(filterChoice) {
    this.orders.results.sort((first, second) => {
      const startDate = new Date(first.pickUpTime.iso).getTime();
      const secondDate = new Date(second.pickUpTime.iso).getTime();
      if (filterChoice.target.value === OrderFilterDates.Ascending) {
        return ((startDate > secondDate) ? -1 : (startDate < secondDate) ? 1 : 0);
      }
      if (filterChoice.target.value === OrderFilterDates.Descending) {
        return ((startDate < secondDate) ? -1 : (startDate > secondDate) ? 1 : 0);
      }
    });
  }
}
