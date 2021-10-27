import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminOverviewPage} from './admin-overview.page';

const routes: Routes = [
  {
    path: '',
    component: AdminOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminOverviewPageRoutingModule {
}
