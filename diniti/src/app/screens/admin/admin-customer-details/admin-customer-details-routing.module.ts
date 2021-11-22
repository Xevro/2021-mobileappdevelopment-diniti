import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCustomerDetailsPage} from './admin-customer-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCustomerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCustomerDetailsPageRoutingModule {
}
