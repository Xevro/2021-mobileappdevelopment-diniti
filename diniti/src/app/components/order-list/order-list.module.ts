import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {OrderListComponent} from './order-list.component';
import {OrderListItemModule} from '../order-list-item/order-list-item.module';
import {FormsModule} from "@angular/forms";
import {OrderDetailsPageModule} from "../../screens/global/order-details/order-details.module";

@NgModule({
  imports: [CommonModule, IonicModule, OrderListItemModule, FormsModule, OrderDetailsPageModule],
  declarations: [OrderListComponent],
  exports: [OrderListComponent]
})
export class OrderListModule {
}
