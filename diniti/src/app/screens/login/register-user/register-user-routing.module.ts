import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterUserPage} from './register-user.page';
import {RouteLiterals} from '../../../models';

const routes: Routes = [
  {
    path: RouteLiterals.registerUser,
    component: RegisterUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterUserPageRoutingModule {
}
