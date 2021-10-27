import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminTabsPage} from './admin-tabs.page';
import {RouteLiterals} from '../../../models/core-models';
import {AuthenticatedGuard} from '../../../guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsPage,
    canActivate: [AuthenticatedGuard],
    children: [
      {
        path: RouteLiterals.adminOverview,
        loadChildren: () => import('../../admin/admin-overview/admin-overview.module').then(m => m.AdminOverviewPageModule)
      },
      {
        path: RouteLiterals.userOrders + '/' + RouteLiterals.userOrderDetail,
        loadChildren: () => import('../../global/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AdminTabsRoutingModule {
}
