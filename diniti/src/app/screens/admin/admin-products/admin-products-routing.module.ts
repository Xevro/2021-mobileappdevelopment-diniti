import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminProductsPage} from './admin-products.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProductsPageRoutingModule {
}
