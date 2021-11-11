import {Component} from '@angular/core';
import {OrderFilterDates, OrderFilterOptions, Orders} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {OrdersProxyService} from '../../../services/backend-services';
import {NetworkService} from '../../../services/core-services';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.page.html',
  styleUrls: ['./admin-overview.page.scss'],
})
export class AdminOverviewPage {

  orders: Orders;
  loading = false;
  errorMessage = false;

  orderFilterStatus = OrderFilterOptions;
  filterStatus: OrderFilterOptions = OrderFilterOptions.empty;

  dateFilterOptions = OrderFilterDates;
  dateFilter: OrderFilterDates = OrderFilterDates.empty;

  constructor(
    private router: Router,
    private networkService: NetworkService,
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
          if (this.dateFilter === OrderFilterDates.empty) {
            this.orders.results.sort((first, second) => {
              const startDate = new Date(first.pickUpTime.iso).getTime();
              const secondDate = new Date(second.pickUpTime.iso).getTime();
              return ((startDate > secondDate) ? -1 : (startDate < secondDate) ? 1 : 0);
            });
          }
          this.loading = false;
          event?.target.complete();
        },
        (error) => {
          this.loading = false;
          this.errorMessage = true;
        });
  }

  sortOnStatus(status) {
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
