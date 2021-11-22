import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {OrderDetailsPageRoutingModule} from './order-details-routing.module';
import {OrderDetailsPage} from './order-details.page';
import {ProductListModule} from '../../../components/product-list/product-list.module';
import {OrderListItemModule} from '../../../components/order-list-item/order-list-item.module';
import {EnumToArrayPipe} from '../../../services/ui-services';
import {ButtonModule} from '../../../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailsPageRoutingModule,
    ProductListModule,
    OrderListItemModule,
    ButtonModule
  ],
  exports: [
    EnumToArrayPipe
  ],
  declarations: [OrderDetailsPage, EnumToArrayPipe]
})
export class OrderDetailsPageModule {
}
