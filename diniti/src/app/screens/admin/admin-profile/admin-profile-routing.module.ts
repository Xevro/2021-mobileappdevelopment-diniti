import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminProfilePage} from './admin-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProfilePageRoutingModule {
}
