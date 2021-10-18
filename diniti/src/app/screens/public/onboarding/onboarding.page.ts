import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: 'onboarding.page.html',
  styleUrls: ['onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  appIcon = '../../../assets/icon/diniti-logo.svg';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(Routes.login);
  }

  registerUser() {
    this.router.navigate(Routes.register);
  }
}
