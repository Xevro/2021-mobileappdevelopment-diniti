import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {ProductsSummaryService} from '../../../services/backend-services';
import {Order} from '../../../models/backend-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

  createOrder = false;
  order: Order = {totalPrice: 0.0} as Order;

  constructor(
    private router: Router,
    private productsSummaryService: ProductsSummaryService
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
      });
    } else {
      this.router.navigate(Routes.userOrderCreate);
    }
  }

  getOrderCompleteUrl() {
    return Routes.orderComplete;
  }
}
