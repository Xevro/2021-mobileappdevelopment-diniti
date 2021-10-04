import {Component, OnInit} from '@angular/core';
import {Routes} from '../../models';
import {FieldTypes} from '../../models/field-types.enum';

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

  constructor() {
  }

  ngOnInit() {
  }
}
