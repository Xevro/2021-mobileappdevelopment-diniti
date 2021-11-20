import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnboardingPage} from './onboarding.page';
import {RouteLiterals} from '../../../models/core-models';

const routes: Routes = [
  {
    path: '',
    component: OnboardingPage,
  },
  {
    path: RouteLiterals.login,
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: RouteLiterals.register,
    loadChildren: () => import('../register/register.module').then(m => m.RegisterUserPageModule)
  },
  {
    path: RouteLiterals.resetPassword + '/' + RouteLiterals.reset,
    loadChildren: () => import('../reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {
}
