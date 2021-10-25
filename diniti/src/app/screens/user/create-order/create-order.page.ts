import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {ProductsProxyService} from '../../../services/backend-services';
import {Products} from '../../../models/backend-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  products: Products;
  filterTerm: string;
  loading = false;
  message: string;
  selectedProducts: Products;

  constructor(
    private router: Router,
    private productsProxyService: ProductsProxyService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.message = null;
    this.productsProxyService.getProductsAction(true)
      .subscribe(
        (response) => {
          this.products = response;
          this.loading = false;
        },
        (error) => {
        });
  }

  ionViewWillEnter() {
    this.message = null;
  }

  updatedProductsList(productsEvent: any) {
    this.selectedProducts = productsEvent.products;
  }

  getOrderSummaryUrl() {
    const filtered = this.selectedProducts?.results?.filter((value) => value?.amount !== 0 && value.amount);
    if (filtered && filtered.length !== 0) {
      this.message = null;
      // this.router.navigate(Routes.userOrderCreateSummary);
    } else {
      this.message = 'Kies een product om verder te kunnen gaan';
    }
  }
}
