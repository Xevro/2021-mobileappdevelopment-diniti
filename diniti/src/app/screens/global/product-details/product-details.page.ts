import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/backend-models';
import {ActivatedRoute} from '@angular/router';
import {ProductsProxyService} from '../../../services/backend-services';
import {Role} from '../../../models/authentication-models';
import {AuthenticationService} from '../../../services/authentication-services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product: Product;
  loading = false;
  error = false;
  role = Role;
  currentRole: Role;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsProxyService: ProductsProxyService,
    public authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.getOrderData();
    this.currentRole = this.authenticationService.getRole();
  }

  getOrderData() {
    this.loading = true;
    this.productsProxyService.getProductByIdAction(this.activatedRoute.snapshot.params.productId)
      .subscribe(
        (response) => {
          this.product = response?.results[0];
          this.loading = false;
          this.error = !this.product?.productId;
        },
        (error) => {
          this.error = true;
        });
  }
}
