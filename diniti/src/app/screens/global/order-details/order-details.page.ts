import {Component} from '@angular/core';
import {Order, OrderStatus, User} from '../../../models/backend-models';
import {ActivatedRoute} from '@angular/router';
import {OrdersProxyService, UserProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {Role} from '../../../models/authentication-models';
import {ToastMessageService} from '../../../services/ui-services';
import {NetworkService} from '../../../services/core-services';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage {

  order: Order;
  user: User;
  loading = false;
  updatingLoading = false;
  error = false;
  edit = false;
  role = Role;
  changedStatus = false;
  currentRole: Role;
  orderStatus = OrderStatus;

  constructor(
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private userProxyService: UserProxyService,
    private ordersProxyService: OrdersProxyService,
    public authenticationService: AuthenticationService,
    private toastMessageService: ToastMessageService
  ) {
  }

  ionViewWillEnter() {
    this.getOrderData();
    this.currentRole = this.authenticationService.getRole();
  }

  getOrderData() {
    this.loading = true;
    this.ordersProxyService.getOrderByIdAction(this.activatedRoute.snapshot.params.orderUuid)
      .subscribe(
        (response) => {
          this.order = response?.results[0];
          this.userProxyService.getUserDataAction(this.order.userId.objectId)
            .subscribe(
              (userData) => {
                this.user = userData;
                this.loading = false;
                this.error = !this.order?.orderId;
              },
              (error) => {
                this.error = true;
                this.toastMessageService.presentToast(
                  `Error, de klanten gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
              });
        },
        (error) => {
          this.error = true;
          this.toastMessageService.presentToast(
            `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }

  editOrder() {
    this.edit = true;
  }

  hideEditOrder() {
    this.edit = false;
  }

  statusChanged(status: any) {
    this.changedStatus = true;
    this.order.status = status.target.value;
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 === e2;
  }

  saveStatus() {
    if (this.networkService.getNetworkStatus()) {
      this.updatingLoading = true;
      this.ordersProxyService.updateOrderAction(this.order.status, this.order.objectId)
        .subscribe(
          (response) => {
            this.updatingLoading = false;
            this.changedStatus = false;
            this.edit = false;
          },
          (error) => {
            this.error = true;
            this.toastMessageService.presentToast(
              `Error, de gegevens konden niet worden opgeslaan. Status: ${error.status}`, 3500);
          });
    } else {
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }
}
