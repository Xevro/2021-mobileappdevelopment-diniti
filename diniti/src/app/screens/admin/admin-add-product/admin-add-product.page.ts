import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.page.html',
  styleUrls: ['./admin-add-product.page.scss'],
})
export class AdminAddProductPage implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }


  goToProducts() {
    this.router.navigate(Routes.adminProducts);
  }

  saveNewProduct() {

  }
}
