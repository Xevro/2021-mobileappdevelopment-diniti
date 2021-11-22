import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CustomerListComponent} from './customer-list.component';
import {CustomerItemModule} from '../customer-item/customer-item.module';
import {ProductListModule} from '../product-list/product-list.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CustomerItemModule, ProductListModule],
  declarations: [CustomerListComponent],
  exports: [CustomerListComponent]
})
export class CustomerListModule {
}
