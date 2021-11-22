import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {OrderSummaryPageRoutingModule} from './order-summary-routing.module';
import {OrderSummaryPage} from './order-summary.page';
import {ProductListModule} from '../../../components/product-list/product-list.module';
import {ButtonModule} from '../../../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderSummaryPageRoutingModule,
    ProductListModule,
    ButtonModule
  ],
  declarations: [OrderSummaryPage]
})
export class OrderSummaryPageModule {
}
