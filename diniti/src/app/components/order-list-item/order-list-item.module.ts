import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {OrderListItemComponent} from './order-list-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [OrderListItemComponent],
  exports: [OrderListItemComponent]
})
export class OrderListItemModule {}
