import {Component} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {OrdersProxyService, ProductsSummaryService} from '../../../services/backend-services';
import {Order, OrderStatus} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication-services';
import {NetworkService, UuidGenerator} from '../../../services/core-services';
import {ToastMessageService} from '../../../services/ui-services';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage {

  createOrder = false;
  loading = false;
  order: Order = {totalPrice: 0.0} as Order;
  timeError: string;

  constructor(
    private router: Router,
    private uuidGenerator: UuidGenerator,
    private networkService: NetworkService,
    private ordersProxyService: OrdersProxyService,
    private toastMessageService: ToastMessageService,
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
        const roundedString = this.order.totalPrice.toFixed(2);
        this.order.totalPrice = Number(roundedString);
      });
    } else {
      this.router.navigate(Routes.userOrderCreate);
    }
  }

  goToOrderComplete() {
    this.timeError = '';
    this.loading = true;
    if (this.order.pickUpTime) {
      this.order.status = OrderStatus.pending;
      this.order.userId = {
        __type: 'Pointer',
        className: '_User',
        objectId: this.authenticationService.getObjectId()
      };
      const date = new Date(Date.now());
      this.order.pickUpTime = {
        __type: 'Date',
        iso: `${date.toDateString()}  ${date.toTimeString()}`
      };
      this.order.orderId = Date.now();
      this.order.orderUuid = this.uuidGenerator.generateUUID();
      if (this.networkService.getNetworkStatus()) {
        this.ordersProxyService.postOrderAction(this.order)
          .subscribe(
            (response) => {
              this.loading = false;
              this.router.navigate(Routes.orderComplete);
            },
            (error) => {
              this.toastMessageService.presentToast(
                `Error, de bestelling kon niet worden opgeslaan. Status: ${error.status}`, 3500);
            });
      } else {
        this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
      }
    } else {
      this.timeError = 'Kies een tijdstip';
    }
  }
}
