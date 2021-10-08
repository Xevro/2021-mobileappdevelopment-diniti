import {Component, OnInit} from '@angular/core';
import {Routes} from '../../models';
import {FieldTypes} from '../../models/field-types.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  fieldTypes = FieldTypes;

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute() {
    return Routes.onboarding;
  }

  get registerRoute() {
    return Routes.register;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  validateLogin() {
      this.router.navigate(Routes.userOverview);
  }
}
