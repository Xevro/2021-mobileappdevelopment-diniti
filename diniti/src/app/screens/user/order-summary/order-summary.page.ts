import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {OrdersProxyService, ProductsSummaryService} from '../../../services/backend-services';
import {Order, OrderStatus} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication-services';
import {UuidGenerator} from '../../../services/core-services';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

  createOrder = false;
  loading = false;
  order: Order = {totalPrice: 0.0} as Order;
  timeError: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private productsSummaryService: ProductsSummaryService,
    private ordersProxyService: OrdersProxyService,
    private uuidGenerator: UuidGenerator
  ) {
  }

  ngOnInit() {
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
    // check if internet connection is active
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
      this.ordersProxyService.postOrderAction(this.order)
        .subscribe(
          (response) => {
            this.loading = false;
            this.router.navigate(Routes.orderComplete);
          },
          (error) => {
            // show error
          });
    } else {
      this.timeError = 'Kies een tijdstip';
    }
  }
}
