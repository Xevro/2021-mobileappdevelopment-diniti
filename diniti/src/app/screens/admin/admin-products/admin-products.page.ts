import {Component} from '@angular/core';
import {Product} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {ProductsProxyService} from '../../../services/backend-services';
import {Routes} from '../../../models/core-models';
import {ToastMessageService} from '../../../services/ui-services';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.page.html',
  styleUrls: ['./admin-products.page.scss'],
})
export class AdminProductsPage {

  products: Product[];
  filterTerm: string;
  loading = false;
  errorMessage = false;
  message: string;

  constructor(
    private router: Router,
    private productsProxyService: ProductsProxyService,
    private toastMessageService: ToastMessageService
  ) {
  }

  ionViewWillEnter() {
    this.message = null;
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.message = null;
    this.productsProxyService.getAllProductsAction()
      .subscribe(
        (response) => {
          this.products = response?.results;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this.errorMessage = true;
          this.toastMessageService.presentToast(
            `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500
          );
        });
  }

  updatedProductsList(productsEvent: any) {
    this.products = productsEvent.products;
  }

  goToCreateOrder() {
    this.router.navigate(Routes.adminCreateProduct);
  }
}
