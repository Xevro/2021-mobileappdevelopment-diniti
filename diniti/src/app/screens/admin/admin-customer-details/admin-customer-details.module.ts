import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AdminCustomerDetailsPageRoutingModule} from './admin-customer-details-routing.module';

import {AdminCustomerDetailsPage} from './admin-customer-details.page';
import {OrderListModule} from "../../../components/order-list/order-list.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCustomerDetailsPageRoutingModule,
    OrderListModule
  ],
  declarations: [AdminCustomerDetailsPage]
})
export class AdminCustomerDetailsPageModule {
}
