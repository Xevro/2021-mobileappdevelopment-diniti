import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Product} from '../../models/backend-models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() hideButtons = false;
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
}
