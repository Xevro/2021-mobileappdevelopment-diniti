import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/backend-models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() hideButtons = false;
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }
}
