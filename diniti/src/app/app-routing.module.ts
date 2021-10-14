import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouteLiterals} from './models';
import {AuthenticatedGuard} from './guards/authenticated.guard';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
  {path: '', redirectTo: RouteLiterals.onboarding, pathMatch: 'full'},
  {
    path: RouteLiterals.onboarding,
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./screens/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: RouteLiterals.userOverview,
    canActivate: [AuthenticatedGuard],
    runGuardsAndResolvers: 'always',
    data: {
      expectedRole: 'user'
    },
    loadChildren: () => import('./screens/user/overview-tabs/overview-tabs.module').then(m => m.OverviewTabsPageModule)
  },
  {
    path: RouteLiterals.userOrderDetail + '/' + RouteLiterals.userOrderComplete,
    canActivate: [AuthenticatedGuard],
    loadChildren: () => import('./screens/user/order-complete/order-complete.module').then(m => m.OrderCompletePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./screens/not-found/not-found.module').then(m => m.NotFoundPageModule)
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
