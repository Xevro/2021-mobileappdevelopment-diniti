import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OnboardingPage} from './onboarding.page';
import {RouteLiterals} from '../../models';

const routes: Routes = [
  {
    path: '',
    component: OnboardingPage
  },
  {
    path: RouteLiterals.login,
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: RouteLiterals.register,
    loadChildren: () => import('../register/register.module').then(m => m.RegisterUserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {
}
