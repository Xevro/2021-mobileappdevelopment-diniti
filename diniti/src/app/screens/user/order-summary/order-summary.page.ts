import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {ProductsSummaryService} from '../../../services/backend-services';
import {Product} from '../../../models/backend-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

  products: Product[];
  createOrder = false;

  constructor(
    private router: Router,
    private productsSummaryService: ProductsSummaryService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const data = this.productsSummaryService.getProductsData();
    if (data !== undefined) {
      this.products = data;
      console.log(data);
      console.log(this.products);
    } else {
      this.router.navigate(Routes.userOrderCreate);
    }
  }

  getOrderCompleteUrl() {
    return Routes.orderComplete;
  }
}
