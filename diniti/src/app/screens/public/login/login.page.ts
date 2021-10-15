import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models';
import {FieldTypes} from '../../../models/field-types.enum';
import {Router} from '@angular/router';
import {LoginProxyService} from '../../../services/backend-services/login-proxy.service';
import {AuthenticationService} from '../../../services/ui-services';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  fieldTypes = FieldTypes;
  emailInput: string = null;
  passwordInput: string = null;

  submitted = false;
  emailErrorMessage = null;
  passwordErrorMessage = null;
  errorMessage = null;

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute() {
    return Routes.onboarding;
  }

  get registerRoute() {
    return Routes.register;
  }

  constructor(
    private router: Router,
    private loginProxyService: LoginProxyService,
    private userContext: AuthenticationService) {
  }

  ngOnInit() {
  }

  emailValueChanged(inputValue: string) {
    this.emailInput = inputValue.trim();
  }

  passwordValueChanged(inputValue: string) {
    this.passwordInput = inputValue.trim();
  }

  validateLogin() {
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
      this.submitLogin();
    }
  }

  submitLogin() {
    this.loginProxyService.loginAction(this.emailInput, this.passwordInput)
      .subscribe(
        (response) => {
          this.userContext.userLoggedIn(response);
          this.submitted = false;
          this.emailInput = null;
          this.passwordInput = null;
          this.router.navigate(Routes.userOverview);
        },
        (error) => {
          console.error('Request failed with error');
          // this.alertService.error(error);
          this.submitted = false;
          this.passwordInput = '';
          this.errorMessage = 'Could not login';
        });
  }
}
