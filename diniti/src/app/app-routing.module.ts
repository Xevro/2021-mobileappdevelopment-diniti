import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouteLiterals} from './models';

const routes: Routes = [
  {
    path: RouteLiterals.onboarding,
    loadChildren: () => import('./screens/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {path: '', redirectTo: RouteLiterals.onboarding, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
