import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminProductDetailPage } from './admin-product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProductDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProductDetailPageRoutingModule {}
