import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {ProductListComponent} from './product-list.component';
import {ProductItemModule} from '../product-item/product-item.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProductItemModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductListModule {}
