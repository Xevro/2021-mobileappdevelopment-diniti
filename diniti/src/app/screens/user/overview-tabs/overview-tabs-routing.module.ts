import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewTabsPage} from './overview-tabs.page';
import {RouteLiterals} from '../../../models';

const routes: Routes = [
  {
    path: '',
    component: OverviewTabsPage,
    children: [
      {
        path: RouteLiterals.userOrders,
        loadChildren: () => import('../overview-orders/overview-orders.module').then(m => m.OverviewOrdersPageModule)
      },
      {
        path: RouteLiterals.userProfile,
        loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: RouteLiterals.userOrderDetail,
        loadChildren: () => import('../order-details/order-details.module').then(m => m.OrderDetailsPageModule)
      },
      {
        path: RouteLiterals.userOrderDetail + '/' + RouteLiterals.userOrderCreate,
        loadChildren: () => import('../create-order/create-order.module').then(m => m.CreateOrderPageModule)
      },
      {
        path: RouteLiterals.userOrderDetail + '/' + RouteLiterals.userOrderCreate + '/' + RouteLiterals.userOrderCreateSummary,
        loadChildren: () => import('../order-summary/order-summary.module').then(m => m.OrderSummaryPageModule)
      },
      {
        path: '',
        redirectTo: '/overview/orders',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/overview/orders',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
