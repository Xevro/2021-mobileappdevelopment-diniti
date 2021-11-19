import {Component} from '@angular/core';
import {Order, OrderStatus, User} from '../../../models/backend-models';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersProxyService, UserProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {Role} from '../../../models/authentication-models';
import {ToastMessageService} from '../../../services/ui-services';
import {NetworkService} from '../../../services/core-services';
import {AlertController} from '@ionic/angular';
import {Routes} from '../../../models/core-models';

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
  removingLoading = false;
  error = false;
  edit = false;
  role = Role;
  changedStatus = false;
  currentRole: Role;
  orderStatus = OrderStatus;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private userProxyService: UserProxyService,
    private ordersProxyService: OrdersProxyService,
    private toastMessageService: ToastMessageService,
    public authenticationService: AuthenticationService
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
          if (this.order) {
            this.userProxyService.getUserDataAction(this.order.userId.objectId)
              .subscribe(
                (userData) => {
                  this.user = userData;
                  this.loading = false;
                  this.error = !this.user?.objectId;
                },
                (error) => {
                  this.error = true;
                  this.toastMessageService.presentToast(
                    `Error, de klanten gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
                });
          } else {
            this.error = true;
            this.toastMessageService.presentToast(
              `Error, de gegevens konden niet worden opgehaald.`, 3500);
          }
        },
        (error) => {
          this.error = true;
          this.toastMessageService.presentToast(
            `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }

  async deleteOrder() {
    if (this.networkService.getNetworkStatus()) {
      const alert = await this.alertController.create({
        cssClass: 'basic-alert',
        header: 'Opgelet',
        message: 'Bent u zeker dat u deze bestelling wilt verwijderen?',
        buttons: [
          {
            text: 'Verwijder',
            cssClass: 'btns-modal-alert',
            handler: () => {
              this.removingLoading = true;
              this.ordersProxyService.deleteOrderAction(this.order.objectId)
                .subscribe(
                  (response) => {
                    this.removingLoading = false;
                    this.router.navigate(Routes.adminOverview);
                  },
                  (error) => {
                    this.removingLoading = false;
                    this.toastMessageService.presentToast(
                      `Error, het product kon niet worden verwijderd. Status: ${error.status}`, 3500);
                  });
            }
          },
          {
            text: 'Annuleer',
            role: 'Annuleer',
            cssClass: 'modal-button-cancel'
          }
        ]
      });
      await alert.present();
    } else {
      await this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
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
