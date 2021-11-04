import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ProductDetailsPage} from './product-details.page';
import {InputFieldModule} from '../../../components/input-field/input-field.module';
import {ButtonModule} from '../../../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsRoutingModule,
    InputFieldModule,
    ButtonModule
  ],
  providers: [CurrencyPipe],
  declarations: [ProductDetailsPage]
})
export class AdminProductDetailsPageModule {
}
