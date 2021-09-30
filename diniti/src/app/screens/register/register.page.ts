import {Component, OnInit} from '@angular/core';
import {RouteLiterals} from '../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute(): string {
    return '/' + RouteLiterals.onboarding;
  }

  get loginRoute(): string {
    return '/' + RouteLiterals.login;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
