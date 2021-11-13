import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OrderCompletePageRoutingModule} from './order-complete-routing.module';

import {OrderCompletePage} from './order-complete.page';
import {ButtonModule} from '../../../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCompletePageRoutingModule,
    ButtonModule
  ],
  declarations: [OrderCompletePage]
})
export class OrderCompletePageModule {
}
