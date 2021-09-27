import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RouteLiterals} from '../../../models';
import {OnboardingPage} from './onboarding.page';

const routes: Routes = [
  {
    path: RouteLiterals.onboarding,
    component: OnboardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {
}
