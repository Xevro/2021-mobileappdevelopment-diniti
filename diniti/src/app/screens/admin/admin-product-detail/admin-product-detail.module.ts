import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AdminProductDetailPageRoutingModule} from './admin-product-detail-routing.module';

import {AdminProductDetailPage} from './admin-product-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProductDetailPageRoutingModule
  ],
  declarations: [AdminProductDetailPage]
})
export class AdminProductDetailPageModule {
}
