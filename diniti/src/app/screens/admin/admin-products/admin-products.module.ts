import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProductsPageRoutingModule } from './admin-products-routing.module';

import { AdminProductsPage } from './admin-products.page';
import {ProductListModule} from "../../../components/product-list/product-list.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdminProductsPageRoutingModule,
        ProductListModule
    ],
  declarations: [AdminProductsPage]
})
export class AdminProductsPageModule {}
