import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {OverviewPageRoutingModule} from './overview-routing.module';

import {OverviewPage} from './overview.page';
import {ButtonModule} from '../../../components/button/button.module';
import {OrderListModule} from '../../../components/order-list/order-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OverviewPageRoutingModule,
        ButtonModule,
        OrderListModule
    ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {
}
