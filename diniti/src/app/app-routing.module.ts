import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RouteLiterals} from './models/route-literals.model';

const routes: Routes = [
  {
    path: RouteLiterals.onboarding,
    loadChildren: () => import('./screens/onboarding/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: RouteLiterals.registerUser,
    loadChildren: () => import('./screens/login/register-user/register-user.module').then(m => m.RegisterUserPageModule)
  },
  {
    path: RouteLiterals.login,
    loadChildren: () => import('./screens/login/login/login.module').then(m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
