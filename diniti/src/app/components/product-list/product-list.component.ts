import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, Products} from '../../models/backend-models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() hideUserButtons = false;
  @Input() showAdminButtons = false;
  @Input() disableDetail = false;
  @Input() hideCount = false;
  @Input() products: Product[];
  @Input() filterTerm: string;

  @Output() changedProductsList = new EventEmitter<Products>();
  @Output() removedProduct = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  changedProducts(productsList: any) {
    this.changedProductsList.emit(productsList);
  }

  removedProductEmit(productsList: boolean) {
    this.removedProduct.emit(productsList);
  }
}
