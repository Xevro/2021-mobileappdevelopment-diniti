import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RouteLiterals} from './models';

const routes: Routes = [
  {
    path: RouteLiterals.onboarding,
    loadChildren: () => import('./screens/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: RouteLiterals.register,
    loadChildren: () => import('./screens/register/register.module').then(m => m.RegisterUserPageModule)
  },
  {
    path: RouteLiterals.login,
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
