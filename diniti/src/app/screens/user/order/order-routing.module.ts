import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OrderPage} from './order.page';
import {RouteLiterals} from '../../../models';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: RouteLiterals.orderOverview,
    loadChildren: () => import('../order-overview/order-overview.module').then(m => m.OrderOverviewPageModule)
  },
  {
    path: RouteLiterals.orderComplete,
    loadChildren: () => import('../order-complete/order-complete.module').then(m => m.OrderCompletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {
}
