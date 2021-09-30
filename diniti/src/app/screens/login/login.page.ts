import {Component, OnInit} from '@angular/core';
import {RouteLiterals} from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute(): string {
    return RouteLiterals.onboarding;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
