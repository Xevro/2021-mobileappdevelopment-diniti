import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {OrderSummaryPageRoutingModule} from './order-summary-routing.module';

import {OrderSummaryPage} from './order-summary.page';
import {ProductListModule} from "../../../components/product-list/product-list.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderSummaryPageRoutingModule,
        ProductListModule
    ],
  declarations: [OrderSummaryPage]
})
export class OrderSummaryPageModule {
}
