import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() hideButtons = false;

  image = '../../../assets/icon/diniti-logo.svg';

  constructor() {
  }

  ngOnInit() {
  }

  imageUrl() {
    return this.image;
  }
}
