import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouteLiterals} from './models/core-models';
import {AuthenticatedGuard} from './guards';
import {Role} from './models/authentication-models';

const routes: Routes = [
  {path: '', redirectTo: RouteLiterals.onboarding, pathMatch: 'full'},
  {
    path: RouteLiterals.onboarding,
    loadChildren: () => import('./screens/public/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: RouteLiterals.userOverview,
    canActivate: [AuthenticatedGuard],
    runGuardsAndResolvers: 'always',
    data: {
      expectedRole: Role.user
    },
    loadChildren: () => import('./screens/user/overview-tabs/overview-tabs.module').then(m => m.OverviewTabsPageModule)
  },
  {
    path: RouteLiterals.adminOverview,
    canActivate: [AuthenticatedGuard],
    runGuardsAndResolvers: 'always',
    data: {
      expectedRole: Role.admin
    },
    loadChildren: () => import('./screens/admin/admin-tabs/admin-tabs.module').then(m => m.AdminTabsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./screens/not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  {
    path: 'admin-products',
    loadChildren: () => import('./screens/admin/admin-products/admin-products.module').then( m => m.AdminProductsPageModule)
  },
  {
    path: 'admin-profile',
    loadChildren: () => import('./screens/admin/admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  },
  {
    path: 'admin-product-detail',
    loadChildren: () => import('./screens/admin/admin-product-detail/admin-product-detail.module').then( m => m.AdminProductDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
