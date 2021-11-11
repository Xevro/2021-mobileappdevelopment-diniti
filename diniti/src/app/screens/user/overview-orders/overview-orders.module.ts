import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OverviewOrdersPageRoutingModule} from './overview-orders-routing.module';

import {OverviewOrdersPage} from './overview-orders.page';
import {ButtonModule} from '../../../components/button/button.module';
import {OrderListModule} from '../../../components/order-list/order-list.module';
import {OrderDetailsPageModule} from '../../global/order-details/order-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewOrdersPageRoutingModule,
    ButtonModule,
    OrderListModule,
    OrderDetailsPageModule
  ],
  declarations: [OverviewOrdersPage]
})
export class OverviewOrdersPageModule {
}
