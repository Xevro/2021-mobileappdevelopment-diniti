import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouteLiterals} from './models';

const routes: Routes = [
  {path: '', redirectTo: RouteLiterals.onboarding, pathMatch: 'full'},
  {
    path: RouteLiterals.onboarding,
    loadChildren: () => import('./screens/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: RouteLiterals.userOverview,
    loadChildren: () => import('./screens/user/overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: RouteLiterals.order,
    loadChildren: () => import('./screens/user/order/order.module').then( m => m.OrderPageModule)
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
