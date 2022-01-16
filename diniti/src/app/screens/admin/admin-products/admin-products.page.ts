import {Component} from '@angular/core';
import {Product} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {ProductsProxyService} from '../../../services/backend-services';
import {Routes} from '../../../models/core-models';
import {ToastMessageService} from '../../../services/ui-services';
import {ProductCategories} from '../../../models/backend-models/enum/product-categories.enum';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.page.html',
  styleUrls: ['./admin-products.page.scss'],
})
export class AdminProductsPage {

  products: Product[];
  allProducts: Product[];
  filterTerm: string;
  loading = false;
  errorMessage = false;
  message: string;

  categoriesEnum = ProductCategories;
  categoriesFilter = ProductCategories.all;

  constructor(
    private router: Router,
    private toastMessageService: ToastMessageService,
    private productsProxyService: ProductsProxyService
  ) {
  }

  ionViewWillEnter() {
    this.message = null;
    this.getProducts();
  }

  getProducts(event?: any) {
    this.loading = true;
    this.message = null;
    this.productsProxyService.getAllProductsAction().subscribe((response) => {
      this.products = response?.results;
      this.allProducts = this.products;
      if (this.categoriesFilter !== ProductCategories.all) {
        this.products = this.products.filter(product => product.category === this.categoriesFilter);
      }
      this.products.sort((a, b) => ((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0));
      this.loading = false;
      event?.target.complete();
    }, (error) => {
      event?.target.complete();
      this.loading = false;
      this.errorMessage = true;
      this.toastMessageService.presentToast(
        `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500
      );
    });
  }

  filterProductsOnCategory(filterChoice) {
    this.products = this.allProducts;
    if (filterChoice.target.value !== ProductCategories.all) {
      this.products = this.products.filter(product => product.category === filterChoice.target.value)
        .sort((a, b) => ((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0));
    }
  }

  updatedProductsList(productsEvent: any) {
    this.products = productsEvent.products;
  }

  goToCreateProduct() {
    this.router.navigate(Routes.adminCreateProduct);
  }
}
