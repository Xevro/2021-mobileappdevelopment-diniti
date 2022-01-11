import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CreateOrderPageRoutingModule} from './create-order-routing.module';
import {CreateOrderPage} from './create-order.page';
import {ProductListModule} from '../../../components/product-list/product-list.module';
import {ButtonModule} from '../../../components/button/button.module';
import {OrderDetailsPageModule} from '../../global/order-details/order-details.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateOrderPageRoutingModule,
        ProductListModule,
        ButtonModule,
        OrderDetailsPageModule
    ],
  declarations: [CreateOrderPage]
})
export class CreateOrderPageModule {
}
