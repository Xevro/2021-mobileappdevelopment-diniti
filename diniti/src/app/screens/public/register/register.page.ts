import {Component} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {FieldTypes} from '../../../models/ui-models';
import {AuthenticationProxyService, AuthenticationService} from '../../../services/authentication-services';
import {RegisterInfo} from '../../../models/authentication-models';
import {Router} from '@angular/router';
import {NetworkService, UuidGenerator} from '../../../services/core-services';
import {ToastMessageService} from '../../../services/ui-services';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

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
  passwordErrorMessage = false;
  passwordConfirmErrorMessage = null;
  checkedErrorMessage = null;
  errorMessage = null;

  constructor(
    private router: Router,
    private uuidGenerator: UuidGenerator,
    private networkService: NetworkService,
    private userContext: AuthenticationService,
    private toastMessageService: ToastMessageService,
    private authenticationProxyService: AuthenticationProxyService
  ) {
  }

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute() {
    return Routes.onboarding;
  }

  get loginRoute() {
    return Routes.login;
  }

  ionViewWillEnter() {
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
      this.passwordErrorMessage = true;
      this.submitted = false;
    } else {
      if (!this.validate(this.passwordInput)) {
        this.passwordErrorMessage = true;
        this.submitted = false;
      } else {
        this.passwordErrorMessage = false;
      }
    }

    if (!this.checked) {
      this.checkedErrorMessage = 'Voorwaarden zijn niet aangeduid';
    } else {
      this.checkedErrorMessage = null;
    }

    if ((!this.firstNameErrorMessage && !this.lastNameErrorMessage && !this.userNameErrorMessage
      && !this.passwordErrorMessage) && (this.passwordInput === this.passwordConfirmInput) && this.checked) {
      this.submitRegister();
    }
  }

  validate(password) {
    const minMaxLength = /^[\s\S]{8,32}$/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const numbers = /[0-9]/;
    const special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

    return minMaxLength.test(password) &&
      upper.test(password) &&
      lower.test(password) &&
      numbers.test(password) &&
      special.test(password);
  }

  submitRegister() {
    if (this.networkService.isOnline) {
      const registerData: RegisterInfo = {
        customerId: this.uuidGenerator.generateUUID(),
        firstname: this.firstNameInput,
        lastname: this.lastNameInput,
        username: this.userNameInput,
        email: this.emailInput,
        userEmail: this.emailInput,
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
            this.errorMessage = '';
            this.toastMessageService.presentToast(
              `Error, de gebruiker kon niet worden geregistreerd.`, 3500);
          });
    } else {
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  firstNameValueChanged(firstNameValue: string) {
    this.firstNameInput = firstNameValue;
  }

  lastNameValueChanged(lastNameValue: string) {
    this.lastNameInput = lastNameValue;
  }

  userNameValueChanged(userNameValue: string) {
    this.userNameInput = userNameValue;
  }

  emailValueChanged(emailValue: string) {
    this.emailInput = emailValue;
  }

  passwordValueChanged(passwordValue: string) {
    this.passwordInput = passwordValue;
  }

  passwordConfirmValueChanged(passwordConfirmValue: string) {
    this.passwordConfirmInput = passwordConfirmValue;
  }

  checkboxChanged(e) {
    this.checked = !e.currentTarget.checked;
  }

  goToConditions() {
    this.router.navigate(Routes.termsAndConditions);
  }
}
