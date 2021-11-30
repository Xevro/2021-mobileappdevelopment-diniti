import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouteLiterals} from './models/core-models';
import {AuthenticatedGuard, LoginGuard} from './guards';
import {Role} from './models/authentication-models';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./screens/public/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: RouteLiterals.onboarding,
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'always',
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
    path: RouteLiterals.termsAndConditions,
    loadChildren: () => import('./screens/public/terms-and-conditions/terms-and-conditions.module')
      .then(m => m.TermsAndConditionsPageModule)
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
