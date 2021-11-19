import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NetworkService} from '../../../services/core-services';
import {OrdersProxyService, UserProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {Orders, User} from '../../../models/backend-models';
import {Role} from '../../../models/authentication-models';
import {ToastMessageService} from '../../../services/ui-services';

@Component({
  selector: 'app-admin-customer-details',
  templateUrl: './admin-customer-details.page.html',
  styleUrls: ['./admin-customer-details.page.scss'],
})
export class AdminCustomerDetailsPage {

  customer: User;
  customersOrders: Orders;
  loading = false;
  loadingOrders = false;
  error = false;
  errorOrders = false;
  role = Role;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private userProxyService: UserProxyService,
    private ordersProxyService: OrdersProxyService,
    private toastMessageService: ToastMessageService,
    public authenticationService: AuthenticationService
  ) {
  }

  ionViewWillEnter() {
    this.getCustomerData();
  }

  getCustomerData() {
    this.loading = true;
    this.userProxyService.getCustomerDataByUuidAction(this.activatedRoute.snapshot.params.customerUuid)
      .subscribe(
        (userData) => {
          this.customer = userData?.results[0];
          this.loading = false;
          this.error = !this.customer?.customerId;
          this.getCustomerOrdersData();
        },
        (error) => {
          this.error = true;
          this.toastMessageService.presentToast(
            `Error, de klanten gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }

  getCustomerOrdersData() {
    this.loadingOrders = true;
    this.ordersProxyService.getOrdersAction(this.customer.objectId)
      .subscribe(
        (orders) => {
          this.customersOrders = orders;
          this.loadingOrders = false;
          this.errorOrders = !this.customersOrders?.results[0]?.objectId;
        },
        (error) => {
          this.errorOrders = true;
          this.toastMessageService.presentToast(
            `Error, de bestellingen konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }
}
