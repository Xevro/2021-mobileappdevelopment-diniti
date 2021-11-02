import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AdminAddProductPageRoutingModule} from './admin-add-product-routing.module';
import {AdminAddProductPage} from './admin-add-product.page';
import {InputFieldModule} from '../../../components/input-field/input-field.module';
import {ButtonModule} from '../../../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAddProductPageRoutingModule,
    InputFieldModule,
    ButtonModule
  ],
  providers: [CurrencyPipe],
  declarations: [AdminAddProductPage]
})
export class AdminAddProductPageModule {
}
