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
        loadChildren: () => import('../user-profile/user-profile.module').then( m => m.UserProfilePageModule)
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
