import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models';
import {FieldTypes} from '../../../models/field-types.enum';
import {AuthenticationProxyService} from '../../../services/backend-services';
import {RegisterInfo} from '../../../models/backend-models';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/ui-services";

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

  fieldTypes = FieldTypes;
  submitted = false;

  firstNameInput: string = null;
  lastNameInput: string = null;
  userNameInput: string = null;
  phoneNumberInput: string = null;
  emailInput: string = null;
  passwordInput: string = null;
  passwordConfirmInput: string = null;

  firstNameErrorMessage = null;
  lastNameErrorMessage = null;
  userNameErrorMessage = null;
  phoneNumberErrorMessage = null;
  emailErrorMessage = null;
  passwordErrorMessage = null;
  passwordConfirmErrorMessage = null;
  errorMessage = null;

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute() {
    return Routes.onboarding;
  }

  get loginRoute() {
    return Routes.login;
  }

  constructor(
    private router: Router,
    private authenticationProxyService: AuthenticationProxyService,
    private userContext: AuthenticationService) {
  }

  ngOnInit() {
  }

  firstNameValueChanged(inputValue: string) {
    this.firstNameInput = inputValue.trim();
  }

  lastNameValueChanged(inputValue: string) {
    this.lastNameInput = inputValue.trim();
  }

  userNameValueChanged(inputValue: string) {
    this.userNameInput = inputValue.trim();
  }

  phoneNumberValueChanged(inputValue: string) {
    this.phoneNumberInput = inputValue.trim();
  }

  emailValueChanged(inputValue: string) {
    this.emailInput = inputValue.trim();
  }

  passwordValueChanged(inputValue: string) {
    this.passwordInput = inputValue.trim();
  }

  passwordConfirmValueChanged(inputValue: string) {
    this.passwordConfirmInput = inputValue.trim();
  }

  validateRegister() {
    this.submitted = true;
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.emailInput === null || this.emailInput.length === 0) {
      this.emailErrorMessage = 'Email is required';
      this.submitted = false;
    } else {
      if (!emailRegex.test(String(this.emailInput).toLowerCase())) {
        this.emailErrorMessage = 'Email is not in the right format';
        this.submitted = false;
      } else {
        this.emailErrorMessage = null;
      }
    }

    if (this.passwordInput === null || this.passwordInput.length === 0) {
      this.passwordErrorMessage = 'Password is required';
      this.submitted = false;
    } else {
      this.passwordErrorMessage = null;
    }

    if (!this.passwordErrorMessage && !this.passwordErrorMessage) {
      this.submitRegister();
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

  submitRegister() {
    const registerData: RegisterInfo = {
      firstname: this.firstNameInput,
      lastname: this.lastNameInput,
      username: this.userNameInput,
      phoneNumber: this.phoneNumberInput,
      email: this.emailInput,
      password: this.passwordInput
    };
    this.authenticationProxyService.registerAction(registerData)
      .subscribe(
        (response) => {
          console.log('response :) :');
          console.log(response);
            this.userContext.userRegistered(response);
            this.submitted = false;
            this.emailInput = null;
            this.passwordInput = null;
            this.router.navigate(Routes.userOverview);
        },
        (error) => {
          console.error('Request failed with error');
          this.submitted = false;
          this.passwordInput = '';
          this.passwordConfirmInput = '';
          this.errorMessage = 'Could not register';
        });
  }
}
