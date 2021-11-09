import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {FieldTypes} from '../../../models/ui-models';
import {Router} from '@angular/router';
import {AuthenticationProxyService, AuthenticationService} from '../../../services/authentication-services';
import {Role} from '../../../models/authentication-models';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  fieldTypes = FieldTypes;
  usernameInput: string = null;
  passwordInput: string = null;

  submitted = false;
  usernameErrorMessage = null;
  passwordErrorMessage = null;
  errorMessage = null;

  constructor(
    private router: Router,
    private authenticationProxyService: AuthenticationProxyService,
    private authenticationService: AuthenticationService) {
  }

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute() {
    return Routes.onboarding;
  }

  get registerRoute() {
    return Routes.register;
  }

  ngOnInit() {
  }

  userNameValueChanged(userNameValue: string) {
    this.usernameInput = userNameValue;
  }

  passwordValueChanged(passwordValue: string) {
    this.passwordInput = passwordValue;
  }

  validateLogin() {
    this.submitted = true;
    if (this.usernameInput === null) {
      this.usernameErrorMessage = 'Gebruikersnaam is vereist';
      this.submitted = false;
    } else {
      this.usernameErrorMessage = null;
    }

    if (this.passwordInput === null || this.passwordInput.length === 0) {
      this.passwordErrorMessage = 'Wachtwoord is vereist';
      this.submitted = false;
    } else {
      this.passwordErrorMessage = null;
    }

    if (!this.passwordErrorMessage && !this.passwordErrorMessage) {
      this.submitLogin();
    }
  }

  submitLogin() {
    this.authenticationProxyService.loginAction(this.usernameInput, this.passwordInput)
      .subscribe(
        (response) => {
          this.authenticationService.userLoggedIn(response);
          this.submitted = false;
          if (response.role === Role.admin) {
            this.router.navigate(Routes.adminOverview);
          } else if (response.role === Role.user) {
            this.router.navigate(Routes.userOverview);
          } else {
            this.passwordInput = null;
            this.errorMessage = 'Kon niet inloggen';
          }
        },
        (error) => {
          this.submitted = false;
          this.passwordInput = null;
          this.errorMessage = 'Kon niet inloggen';
        });
  }
}
