import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {FieldTypes} from '../../../models/ui-models';
import {Router} from '@angular/router';
import {AuthenticationProxyService, AuthenticationService} from '../../../services/authentication-services';

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
    private authenticationProxyService: AuthenticationProxyService,
    private userContext: AuthenticationService) {
  }

  ngOnInit() {
  }

  userNameValueChanged(userNameValue: string) {
    this.usernameInput = userNameValue.trim();
  }

  passwordValueChanged(passwordValue: string) {
    this.passwordInput = passwordValue.trim();
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
          this.userContext.userLoggedIn(response);
          this.submitted = false;
          this.router.navigate(Routes.userOverview);
        },
        (error) => {
          this.submitted = false;
          this.passwordInput = null;
          this.errorMessage = 'Kon niet inloggen';
        });
  }
}
