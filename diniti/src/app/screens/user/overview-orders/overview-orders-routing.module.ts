import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OverviewOrdersPage} from './overview-orders.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewOrdersPageRoutingModule {
}
