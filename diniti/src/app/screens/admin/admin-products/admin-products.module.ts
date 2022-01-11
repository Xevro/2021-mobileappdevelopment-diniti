import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AdminProductsPageRoutingModule} from './admin-products-routing.module';
import {AdminProductsPage} from './admin-products.page';
import {ProductListModule} from '../../../components/product-list/product-list.module';
import {OrderDetailsPageModule} from '../../global/order-details/order-details.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdminProductsPageRoutingModule,
        ProductListModule,
        OrderDetailsPageModule
    ],
  declarations: [AdminProductsPage]
})
export class AdminProductsPageModule {
}
