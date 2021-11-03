import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/backend-models';
import {ActivatedRoute} from '@angular/router';
import {ProductsProxyService} from '../../../services/backend-services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product: Product;
  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsProxyService: ProductsProxyService
  ) {
  }

  ngOnInit() {
    this.getOrderData();
  }

  getOrderData() {
    this.loading = true;
    this.productsProxyService.getProductByIdAction(this.activatedRoute.snapshot.params.productId)
      .subscribe(
        (response) => {
          this.product = response?.results[0];
          this.loading = false;
        },
        (error) => {
        });
  }
}
