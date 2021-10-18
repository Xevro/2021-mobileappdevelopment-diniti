import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../models/backend-models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() hideButtons = false;
  @Input() products: Products;

  constructor() { }

  ngOnInit() {}

}
