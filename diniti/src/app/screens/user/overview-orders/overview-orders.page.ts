import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';
import {OrdersProxyService, SettingsProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {OrderFilterDates, OrderFilterOptions, Orders} from '../../../models/backend-models';
import {ToastMessageService} from '../../../services/ui-services';
import {NetworkService} from '../../../services/core-services';

@Component({
  selector: 'app-overview-orders',
  templateUrl: './overview-orders.page.html',
  styleUrls: ['./overview-orders.page.scss'],
})
export class OverviewOrdersPage {

  orders: Orders;
  loading = false;
  canOrder = false;

  orderFilterStatus = OrderFilterOptions;
  filterStatus: OrderFilterOptions = OrderFilterOptions.empty;

  dateFilterOptions = OrderFilterDates;
  dateFilter: OrderFilterDates = OrderFilterDates.empty;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private ordersProxyService: OrdersProxyService,
    private toastMessageService: ToastMessageService,
    private settingsProxyService: SettingsProxyService,
    private authenticationService: AuthenticationService
  ) {
  }

  ionViewWillEnter() {
    this.getOrders();
  }

  getOrders(event?: any) {
    this.loading = true;
    if (this.networkService.isOnline) {
      this.settingsProxyService.getSettingsAction().subscribe((result) => {
        const settings = result.results[0];
        this.canOrder = settings.status;
      }, (error) => {
        this.toastMessageService.presentToast(
          `Error, enkele gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
      });
    }
    this.ordersProxyService.getOrdersAction(this.authenticationService.getObjectId()).subscribe((response) => {
      this.orders = response;
      if (this.dateFilter === OrderFilterDates.empty) {
        this.orders.results.sort((first, second) => (first.orderId > second.orderId ? -1 : 0));
      }
      this.loading = false;
      event?.target.complete();
    }, (error) => {
      event?.target.complete();
      this.toastMessageService.presentToast(
        `Error, de bestellingen konden niet worden opgehaald. Status: ${error.status}`, 3500);
    });
  }

  createOrder() {
    this.router.navigate(Routes.userOrderCreate);
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
        if (filterChoice.target.value === OrderFilterDates.ascending) {
          return ((startDate > secondDate) ? -1 : (startDate < secondDate) ? 1 : 0);
        }
        if (filterChoice.target.value === OrderFilterDates.descending) {
          return ((startDate < secondDate) ? -1 : (startDate > secondDate) ? 1 : 0);
        }
      });
    }
  }
}
