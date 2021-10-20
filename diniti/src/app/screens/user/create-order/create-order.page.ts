import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {ProductsProxyService} from '../../../services/backend-services';
import {Products} from '../../../models/backend-models';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  products: Products;
  filterTerm: string;

  constructor(private productsProxyService: ProductsProxyService) {
  }

  ngOnInit() {
    this.productsProxyService.getProductsAction(true)
      .subscribe(
        (response) => {
          this.products = response;
        },
        (error) => {
        });
  }

  ionViewWillEnter() {

  }

  updatedProductsList(productsEvent: any) {
    const products: Products = productsEvent.products;
    console.log(products.results);
    this.products = products;
  }

  getOrderSummaryUrl() {
    return Routes.userOrderCreateSummary;
  }
}
