import {Component} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: 'onboarding.page.html',
  styleUrls: ['onboarding.page.scss'],
})
export class OnboardingPage {

  appIcon = '../../../assets/icon/diniti-logo.svg';

  constructor(private router: Router) {
  }

  ionViewWillEnter() {
  }

  login() {
    this.router.navigate(Routes.login);
  }

  registerUser() {
    this.router.navigate(Routes.register);
  }
}
