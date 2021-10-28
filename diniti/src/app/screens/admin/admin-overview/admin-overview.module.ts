import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AdminOverviewPageRoutingModule} from './admin-overview-routing.module';

import {AdminOverviewPage} from './admin-overview.page';
import {OrderListModule} from '../../../components/order-list/order-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminOverviewPageRoutingModule,
    OrderListModule
  ],
  declarations: [AdminOverviewPage]
})
export class AdminOverviewPageModule {
}
