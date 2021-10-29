import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/backend-models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() hideUserButtons = false;
  @Input() showAdminButtons = false;
  @Input() hideCount = false;
  @Input() product: Product;

  @Output() changedProduct = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  countUpProductAmount() {
    if (this.product.amount) {
      this.product.amount++;
    } else {
      this.product.amount = 1;
    }
    this.changedProduct.emit(this.product);
  }

  countDownProductAmount() {
    if (this.product.amount >= 1) {
      this.product.amount -= 1;
      this.changedProduct.emit(this.product);
    }
  }

  deleteProduct() {

  }

  toggleVisibility(visibility: boolean) {
    this.product.visibility = visibility;

  }
}
