import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {FieldTypes} from '../../../models';
import {AuthenticationProxyService, AuthenticationService} from '../../../services/authentication-services';
import {RegisterInfo} from '../../../models/authentication-models';
import {Router} from '@angular/router';

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
  emailInput: string = null;
  passwordInput: string = null;
  passwordConfirmInput: string = null;
  checked = false;

  firstNameErrorMessage = null;
  lastNameErrorMessage = null;
  userNameErrorMessage = null;
  emailErrorMessage = null;
  passwordErrorMessage = null;
  passwordConfirmErrorMessage = null;
  checkedErrorMessage = null;
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

  emailValueChanged(inputValue: string) {
    this.emailInput = inputValue.trim();
  }

  passwordValueChanged(inputValue: string) {
    this.passwordInput = inputValue.trim();
  }

  passwordConfirmValueChanged(inputValue: string) {
    this.passwordConfirmInput = inputValue.trim();
  }

  checkboxChanged(e) {
    this.checked = !e.currentTarget.checked;
    console.log(this.checked);
  }

  validateRegister() {
    this.submitted = true;
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.emailInput === null || this.emailInput.length === 0) {
      this.emailErrorMessage = 'Email is vereist';
      this.submitted = false;
    } else {
      if (!emailRegex.test(String(this.emailInput).toLowerCase())) {
        this.emailErrorMessage = 'Email is niet in het juiste formaat';
        this.submitted = false;
      } else {
        this.emailErrorMessage = null;
      }
    }

    if (this.firstNameInput === null) {
      this.firstNameErrorMessage = 'Voornaam is vereist';
      this.submitted = false;
    } else {
      this.firstNameErrorMessage = null;
    }

    if (this.lastNameInput === null) {
      this.lastNameErrorMessage = 'Achternaam is vereist';
      this.submitted = false;
    } else {
      this.lastNameErrorMessage = null;
    }

    if (this.userNameInput === null) {
      this.userNameErrorMessage = 'Gebruikersnaam is vereist';
      this.submitted = false;
    } else {
      this.userNameErrorMessage = null;
    }

    if (this.passwordInput === null) {
      this.passwordErrorMessage = 'Wachtwoord is vereist';
      this.submitted = false;
    } else {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordRegex.test(this.passwordInput)) {
        this.passwordErrorMessage = 'Wachtwoord is niet goed opgebouwd';
        this.submitted = false;
      } else {
        this.passwordErrorMessage = null;
      }
    }

    if(!this.checked) {
      this.checkedErrorMessage = 'Voorwaarden zijn niet aangeduid';
    } else {
      this.checkedErrorMessage = null;
    }

    if (!this.firstNameErrorMessage && !this.lastNameErrorMessage && !this.userNameErrorMessage
      && !this.passwordErrorMessage && (this.passwordInput === this.passwordConfirmInput) && this.checked) {
      this.submitRegister();
    }
  }

  submitRegister() {
    const registerData: RegisterInfo = {
      firstname: this.firstNameInput,
      lastname: this.lastNameInput,
      username: this.userNameInput,
      email: this.emailInput,
      password: this.passwordInput
    };
    this.authenticationProxyService.registerAction(registerData)
      .subscribe(
        (response) => {
          this.userContext.userRegistered(response);
          this.submitted = false;
          this.emailInput = null;
          this.passwordInput = null;
          this.router.navigate(Routes.userOverview);
        },
        (error) => {
          this.submitted = false;
          this.passwordInput = '';
          this.passwordConfirmInput = '';
          this.errorMessage = 'Kon niet registreren';
        });
  }
}
