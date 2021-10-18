import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OnboardingPage} from './onboarding.page';
import {RouteLiterals} from '../../../models/core-models';
import {LoginGuard} from '../../../guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: OnboardingPage,
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: RouteLiterals.login,
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: RouteLiterals.register,
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('../register/register.module').then(m => m.RegisterUserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {
}
