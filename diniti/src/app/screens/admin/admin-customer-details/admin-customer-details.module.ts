import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AdminCustomerDetailsPageRoutingModule} from './admin-customer-details-routing.module';

import {AdminCustomerDetailsPage} from './admin-customer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCustomerDetailsPageRoutingModule
  ],
  declarations: [AdminCustomerDetailsPage]
})
export class AdminCustomerDetailsPageModule {
}
