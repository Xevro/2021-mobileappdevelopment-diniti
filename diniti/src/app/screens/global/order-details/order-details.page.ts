import {Component} from '@angular/core';
import {Order, OrderStatus, User} from '../../../models/backend-models';
import {ActivatedRoute} from '@angular/router';
import {OrdersProxyService, UserProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {Role} from '../../../models/authentication-models';

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
    private activatedRoute: ActivatedRoute,
    private ordersProxyService: OrdersProxyService,
    public authenticationService: AuthenticationService,
    private userProxyService: UserProxyService
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
              });
        },
        (error) => {
          this.error = true;
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
        });
  }
}
