import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminAddProductPage} from './admin-add-product.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAddProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddProductPageRoutingModule {
}
