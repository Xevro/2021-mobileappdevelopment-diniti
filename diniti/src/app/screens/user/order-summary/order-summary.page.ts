import {Component} from '@angular/core';
import {Methods, Routes} from '../../../models/core-models';
import {
  OrdersProxyService,
  ProductsSummaryService,
  SettingsProxyService,
  UserProxyService
} from '../../../services/backend-services';
import {Order, OrderStatus, StoreSettings, User} from '../../../models/backend-models';
import {NavigationExtras, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication-services';
import {NetworkService, OfflineStorageManager, UuidGenerator} from '../../../services/core-services';
import {ToastMessageService} from '../../../services/ui-services';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage {

  createOrder = false;
  loading = false;
  settings: StoreSettings;
  startHour: any;
  closingHour: any;
  order: Order = {totalPrice: 0.0, username: '--'} as Order;
  timeError: string;
  selectedTime: any;
  user: User;

  constructor(
    private router: Router,
    private location: Location,
    private uuidGenerator: UuidGenerator,
    private networkService: NetworkService,
    private userProxyService: UserProxyService,
    private ordersProxyService: OrdersProxyService,
    private toastMessageService: ToastMessageService,
    private settingsProxyService: SettingsProxyService,
    private offlineStorageManager: OfflineStorageManager,
    private authenticationService: AuthenticationService,
    private productsSummaryService: ProductsSummaryService
  ) {
  }

  ionViewWillEnter() {
    const productsData = this.productsSummaryService.getProductsData();
    if (productsData !== undefined) {
      this.order.products = productsData;
      this.order.products.filter((product) => {
        this.order.totalPrice += (product.price * product.amount);
        this.order.totalPrice = Number(this.order.totalPrice.toFixed(2));
      });

      if (this.networkService.isOnline) {
        this.settingsProxyService.getSettingsAction().subscribe((result) => {
          this.settings = result.results[0];
          this.startHour = this.settings.startHour.iso;
          this.closingHour = this.settings.closingHour.iso;
        }, (error) => {
          this.toastMessageService.presentToast(
            `Error, de instellingen konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
      }
    } else {
      this.router.navigate(Routes.userOrderCreate);
    }
    this.userProxyService.getUserDataAction(this.authenticationService.getObjectId()).subscribe((response) => {
      this.user = response;
      this.order.username = this.user.firstname + ' ' + this.user.lastname ?? '--';
    }, (error) => {
      this.toastMessageService.presentToast(`Error, enkele gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
    });
  }

  goToOrderComplete() {
    this.timeError = null;
    this.loading = true;
    if (this.selectedTime) {
      this.order.status = OrderStatus.pending;
      this.order.userId = {
        __type: 'Pointer', className: '_User',
        objectId: this.authenticationService.getObjectId()
      };
      this.order.pickUpTime = {__type: 'Date', iso: this.selectedTime};
      this.order.orderId = this.uuidGenerator.generateIntegers(8);
      this.order.orderUuid = this.uuidGenerator.generateUUID();

      if (this.networkService.isOnline) {
        this.ordersProxyService.postOrderAction(this.order).subscribe(() => {
          this.loading = false;
          localStorage.setItem('orderComplete', '1');
          setTimeout(() => {
            const navigationExtras: NavigationExtras = {
              state: {pickUpTime: this.order.pickUpTime}
            };
            this.router.navigate(Routes.orderComplete, navigationExtras);
          }, 1000);
        }, (error) => {
          this.loading = false;
          localStorage.setItem('orderComplete', '0');
          this.toastMessageService.presentToast(
            `Error, de bestelling kon niet worden opgeslaan. Status: ${error.status}`, 3500);
        });
      } else {
        this.loading = false;
        localStorage.setItem('orderComplete', '1');
        this.offlineStorageManager.addRequestToStorage({
          id: this.uuidGenerator.generateUUID(),
          method: Methods.POST,
          payload: this.order,
          url: `classes/Orders`
        });
        this.toastMessageService.presentToast('De bestelling wordt verwerkt van zodra er terug internet beschikbaar is.', 3500);
        setTimeout(() => {
          const navigationExtras: NavigationExtras = {
            state: {pickUpTime: this.order.pickUpTime}
          };
          this.router.navigate(Routes.orderComplete, navigationExtras);
        }, 1000);
      }
    } else {
      this.timeError = 'Kies een tijdstip';
    }
  }

  optionalNoticeChanged(noticeValue: any) {
    const notice = noticeValue.target.value;
    if (notice.length !== 0) {
      this.order.optionalNotice = notice;
    } else {
      this.order.optionalNotice = '';
    }
  }

  goBack() {
    this.location.back();
  }
}
