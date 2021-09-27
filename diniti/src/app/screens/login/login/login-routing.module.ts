import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPage} from './login.page';
import {RouteLiterals} from '../../../models';

const routes: Routes = [
  {
    path: RouteLiterals.login,
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {
}
