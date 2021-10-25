import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {ProductsProxyService} from '../../../services/backend-services';
import {Product, Products} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {ProductsSummaryService} from '../../../services/backend-services';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  products: Product[];
  filterTerm: string;
  loading = false;
  message: string;
  selectedProducts: Product[];

  constructor(
    private router: Router,
    private productsProxyService: ProductsProxyService,
    private productsSummaryService: ProductsSummaryService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.message = null;
    this.productsProxyService.getProductsAction(true)
      .subscribe(
        (response) => {
          this.products = response?.results;
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
    const filteredProducts = this.selectedProducts?.filter((value) => value?.amount !== 0 && value.amount);
    if (filteredProducts && filteredProducts.length !== 0) {
      this.message = null;
      if (this.productsSummaryService.setProductsData(filteredProducts)) {
        this.router.navigate(Routes.userOrderCreateSummary);
      }
    } else {
      this.message = 'Kies een product om verder te kunnen gaan';
    }
  }

  getOverviewUrl() {
    this.router.navigate(Routes.userOverview);
  }
}
