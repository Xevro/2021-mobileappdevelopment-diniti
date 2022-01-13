import {Component} from '@angular/core';
import {FieldTypes} from '../../../models/ui-models';
import {UserProxyService} from '../../../services/backend-services';
import {NetworkService, OfflineStorageManager, UuidGenerator} from '../../../services/core-services';
import {ToastMessageService} from '../../../services/ui-services';
import {Methods, Routes} from '../../../models/core-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {

  fieldTypes = FieldTypes;
  email: string = null;
  emailErrorMessage: string;
  submitted = false;

  constructor(
    private router: Router,
    private uuidGenerator: UuidGenerator,
    private networkService: NetworkService,
    private userProxyService: UserProxyService,
    private toastMessageService: ToastMessageService,
    private offlineStorageManager: OfflineStorageManager
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

  validateEmail() {
    this.submitted = true;
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.email === null || this.email.length === 0) {
      this.emailErrorMessage = 'Email is vereist';
      this.submitted = false;
    } else {
      if (!emailRegex.test(String(this.email).toLowerCase())) {
        this.emailErrorMessage = 'Email is niet in het juiste formaat';
        this.submitted = false;
      } else {
        this.emailErrorMessage = null;
      }
    }
    if (!this.emailErrorMessage) {
      this.submitResetPassword();
    }
  }

  submitResetPassword() {
    if (this.networkService.isOnline) {
      this.userProxyService.requestPasswordReset(this.email)
        .subscribe(
          (response) => {
            this.submitted = false;
            this.router.navigate(Routes.login);
          },
          (error) => {
            this.submitted = false;
            this.emailErrorMessage = null;
            this.toastMessageService.presentToast(
              `Error, de aanvraag kon niet worden verstuurd. Status: ${error.status}`, 3500);
          });
    } else {
      this.submitted = false;
      const headerOptions = {'Content-Type': 'application/json'};
      this.offlineStorageManager.addRequestToStorage({
        id: this.uuidGenerator.generateUUID(),
        method: Methods.POST,
        payload: {email: this.email},
        headerOptions,
        url: `requestPasswordReset`
      });
      this.toastMessageService.presentToast('De bestelling wordt verwerkt van zodra er terug internet beschikbaar is.', 3500);
      this.router.navigate(Routes.login);
    }
  }

  emailValueChanged(emailValue: string) {
    this.email = emailValue;
  }
}
