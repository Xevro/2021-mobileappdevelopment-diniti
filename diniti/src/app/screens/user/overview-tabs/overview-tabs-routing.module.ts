import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewTabsPage} from './overview-tabs.page';
import {RouteLiterals} from '../../../models/core-models';
import {OrderCompleteGuard} from '../../../guards';

const routes: Routes = [
  {
    path: '',
    component: OverviewTabsPage,
    children: [
      {
        path: RouteLiterals.orders,
        loadChildren: () => import('../overview-orders/overview-orders.module').then(m => m.OverviewOrdersPageModule)
      },
      {
        path: RouteLiterals.userProfile,
        loadChildren: () => import('../../global/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: RouteLiterals.orders + '/' + RouteLiterals.userOrderDetail + '/:orderUuid',
        loadChildren: () => import('../../global/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
      },
      {
        path: RouteLiterals.orders + '/' + RouteLiterals.userProduct + '/:productUuid',
        loadChildren: () => import('../../global/product-details/product-details.module').then(m => m.AdminProductDetailsPageModule)
      },
      {
        path: RouteLiterals.orders + '/' + RouteLiterals.userOrderCreate,
        loadChildren: () => import('../create-order/create-order.module').then(m => m.CreateOrderPageModule)
      },
      {
        path: RouteLiterals.orders + '/' + RouteLiterals.userOrderCreate + '/' + RouteLiterals.userOrderCreateSummary,
        loadChildren: () => import('../order-summary/order-summary.module').then(m => m.OrderSummaryPageModule)
      },
      {
        path: RouteLiterals.userOrderDetail + '/' + RouteLiterals.userOrderComplete,
        canActivateChild: [OrderCompleteGuard],
        runGuardsAndResolvers: 'always',
        loadChildren: () => import('../order-complete/order-complete.module').then(m => m.OrderCompletePageModule)
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
