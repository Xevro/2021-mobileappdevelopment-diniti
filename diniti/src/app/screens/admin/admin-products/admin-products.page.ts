import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {ProductsProxyService} from '../../../services/backend-services';
import {Routes} from '../../../models/core-models';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.page.html',
  styleUrls: ['./admin-products.page.scss'],
})
export class AdminProductsPage implements OnInit {

  products: Product[];
  filterTerm: string;
  loading = false;
  message: string;

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
    this.products = productsEvent.products;
  }

  getOrderSummaryUrl() {

  }

  getOverviewUrl() {
    this.router.navigate(Routes.userOverview);
  }
}
