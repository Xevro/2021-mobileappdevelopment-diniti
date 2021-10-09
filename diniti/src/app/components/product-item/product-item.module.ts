import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {ProductItemComponent} from './product-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent]
})
export class ProductItemModule {}
