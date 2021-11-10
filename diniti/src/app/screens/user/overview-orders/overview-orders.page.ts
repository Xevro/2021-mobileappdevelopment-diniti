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
  loading = false;

  orderFilterStatus = OrderFilterOptions;
  filterStatus: OrderFilterOptions = OrderFilterOptions.empty;

  dateFilterOptions = OrderFilterDates;
  dateFilter: OrderFilterDates = OrderFilterDates.empty;

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
          if (this.dateFilter === OrderFilterDates.empty) {
            this.orders.results.sort((first, second) => {
              const startDate = new Date(first.pickUpTime.iso).getTime();
              const secondDate = new Date(second.pickUpTime.iso).getTime();
              return ((startDate > secondDate) ? -1 : (startDate < secondDate) ? 1 : 0);
            });
          }
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
  }

  sortOnDate(filterChoice) {
    if (filterChoice.target.value !== OrderFilterDates.empty) {
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
}
