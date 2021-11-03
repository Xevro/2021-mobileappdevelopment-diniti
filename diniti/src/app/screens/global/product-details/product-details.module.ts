import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ProductDetailsPage} from './product-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsRoutingModule
  ],
  declarations: [ProductDetailsPage]
})
export class AdminProductDetailsPageModule {
}
