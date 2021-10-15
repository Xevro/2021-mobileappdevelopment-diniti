import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models';
import {FieldTypes} from '../../../models/field-types.enum';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

  fieldTypes = FieldTypes;

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute() {
    return Routes.onboarding;
  }

  get loginRoute() {
    return Routes.login;
  }

  constructor() {
  }

  ngOnInit() {
  }

  /*
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(this.passwordInput)) {
      this.passwordErrorMessage = 'Password is not valid';
      this.submitted = false;
    } else {
      this.passwordErrorMessage = null;
    }*/
}
