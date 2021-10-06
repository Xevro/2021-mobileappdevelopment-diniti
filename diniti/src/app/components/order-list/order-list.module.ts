import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {OrderListComponent} from './order-list.component';
import {OrderListItemModule} from '../order-list-item/order-list-item.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrderListItemModule],
  declarations: [OrderListComponent],
  exports: [OrderListComponent]
})
export class OrderListModule {}
