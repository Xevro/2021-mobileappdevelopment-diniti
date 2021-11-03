import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminTabsPage} from './admin-tabs.page';
import {RouteLiterals} from '../../../models/core-models';
import {AuthenticatedGuard} from '../../../guards';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsPage,
    canActivate: [AuthenticatedGuard],
    children: [
      {
        path: RouteLiterals.adminOrders,
        loadChildren: () => import('../../admin/admin-overview/admin-overview.module').then(m => m.AdminOverviewPageModule)
      },
      {
        path: RouteLiterals.orders + '/' + RouteLiterals.userOrderDetail + '/:orderId',
        loadChildren: () => import('../../global/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
      },
      {
        path: RouteLiterals.adminProducts,
        loadChildren: () => import('../../admin/admin-products/admin-products.module').then(m => m.AdminProductsPageModule)
      },
      {
        path: RouteLiterals.adminProducts + '/' + RouteLiterals.adminProductDetail + '/:productId',
        loadChildren: () => import('../../global/product-details/product-details.module').then(m => m.AdminProductDetailsPageModule)
      },
      {
        path: RouteLiterals.adminProfile,
        loadChildren: () => import('../../admin/admin-profile/admin-profile.module').then(m => m.AdminProfilePageModule)
      },
      {
        path: RouteLiterals.adminProducts + '/' + RouteLiterals.adminProductCreate,
        loadChildren: () => import('../../admin/admin-add-product/admin-add-product.module').then(m => m.AdminAddProductPageModule)
      },
      {
        path: '',
        redirectTo: '/admin/orders',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/orders',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AdminTabsRoutingModule {
}
