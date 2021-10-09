import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  image = '../../../assets/icon/diniti-logo.svg';

  constructor() {
  }

  ngOnInit() {
  }

  imageUrl() {
    return this.image;
  }
}
