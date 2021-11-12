import {Component} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {ProductsProxyService, ProductsSummaryService} from '../../../services/backend-services';
import {Product} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {ToastMessageService} from '../../../services/ui-services';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage {

  products: Product[];
  filterTerm: string;
  loading = false;
  changedProducts = false;
  message: string;
  selectedProducts: Product[];

  constructor(
    private router: Router,
    private toastMessageService: ToastMessageService,
    private productsProxyService: ProductsProxyService,
    private productsSummaryService: ProductsSummaryService
  ) {
  }

  ionViewWillEnter() {
    this.getProducts();
  }

  getProducts(event?: any) {
    this.loading = true;
    this.message = null;
    this.productsProxyService.getProductsWithVisibilityAction(true)
      .subscribe(
        (response) => {
          this.products = response?.results;
          this.loading = false;
          this.loadStoredProducts();
          this.checkOrders();
          event?.target.complete();
        },
        (error) => {
          event?.target.complete();
          this.message = 'Geen producten kunnen ophalen';
          this.toastMessageService.presentToast(
            `Error, de producten konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
    if (this.selectedProducts?.length === 0) {
      for (const [key] of Object.entries(this.products)) {
        this.products[key].amount = 0;
      }
    }
  }

  loadStoredProducts() {
    const storedProducts = this.productsSummaryService.getProductsData();
    if (storedProducts !== undefined && storedProducts) {
      for (const [key, value] of Object.entries(storedProducts)) {
        this.products[key] = value;
      }
      this.selectedProducts = storedProducts;
    }
  }

  updatedProductsList(productsEvent: any) {
    this.selectedProducts = productsEvent.products;
    this.checkOrders();
  }

  getOrderSummaryUrl() {
    const filteredProducts = this.selectedProducts?.filter((value) => value?.amount !== 0 && value.amount);
    if (filteredProducts && filteredProducts.length !== 0) {
      this.message = null;
      this.productsSummaryService.setProductsData(filteredProducts);
      this.router.navigate(Routes.userOrderCreateSummary);
    } else {
      this.changedProducts = false;
      this.message = 'Kies een product om verder te gaan';
    }
  }

  checkOrders() {
    const filteredProducts = this.selectedProducts?.filter((value) => value?.amount !== 0 && value.amount);
    if (filteredProducts && filteredProducts.length !== 0) {
      this.changedProducts = true;
      this.message = null;
    } else {
      this.changedProducts = false;
      this.message = 'Kies een product om verder te gaan';
    }
  }

  goToOverview() {
    this.productsSummaryService.removeProductsData();
    this.selectedProducts = [];
    this.router.navigate(Routes.userOverview);
  }
}
