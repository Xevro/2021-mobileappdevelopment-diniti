import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication-services';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';
import {FieldTypes} from '../../../models/ui-models';
import {UserProxyService} from '../../../services/backend-services';
import {UpdateUser, User} from '../../../models/backend-models';
import {PhotoService, ToastMessageService} from '../../../services/ui-services';
import {NetworkService} from '../../../services/core-services';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {

  editUserData = false;
  toggleEditView = false;
  cancelButton = false;
  fieldTypes = FieldTypes;
  submitted = true;
  editButton = true;
  loadingImage = false;

  userData: User;
  updatedData: UpdateUser = {} as UpdateUser;

  firstNameErrorMessage: string = null;
  lastNameErrorMessage: string = null;
  userNameErrorMessage: string = null;
  emailErrorMessage: string = null;

  constructor(
    private router: Router,
    private location: Location,
    private photoService: PhotoService,
    private networkService: NetworkService,
    private userProxyService: UserProxyService,
    private toastMessageService: ToastMessageService,
    private authenticationService: AuthenticationService
  ) {
  }

  ionViewWillEnter() {
    this.getUserDataFromCloud();
  }

  getUserDataFromCloud() {
    const objectId = this.authenticationService.getObjectId();
    this.userProxyService.getUserDataAction(objectId)
      .subscribe(
        (response) => {
          this.userData = response;
          this.userData.email = response.userEmail;
          this.updatedData.firstname = response.firstname;
          this.updatedData.lastname = response.lastname;
          this.updatedData.email = response.userEmail;
          this.updatedData.userEmail = response.userEmail;
          this.updatedData.username = response.username;
          this.loadingImage = false;
        },
        (error) => {
          this.toastMessageService.presentToast(
            `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }

  logout() {
    this.authenticationService.logOut();
    this.router.navigate(Routes.onboarding);
  }

  cancelEditUser() {
    this.toggleEditView = false;
    this.cancelButton = false;
    this.editButton = true;
  }

  handleEditUserData() {
    this.cancelButton = true;
    this.editButton = false;
    this.toggleEditView = true;
  }

  validateInput() {
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.updatedData.email === '' || this.updatedData.email.length === 0) {
      this.emailErrorMessage = 'Email adres mag niet leeg zijn';
      this.submitted = false;
    } else {
      if (!emailRegex.test(String(this.updatedData.email).toLowerCase())) {
        this.emailErrorMessage = 'Email adres is niet in het juiste formaat';
        this.submitted = false;
      } else {
        this.emailErrorMessage = '';
      }
    }
    if (this.updatedData.firstname === '') {
      this.firstNameErrorMessage = 'Voornaam mag niet leeg zijn';
      this.submitted = false;
    } else {
      this.firstNameErrorMessage = '';
    }
    if (this.updatedData.lastname === '') {
      this.lastNameErrorMessage = 'Achternaam mag niet leeg zijn';
      this.submitted = false;
    } else {
      this.lastNameErrorMessage = '';
    }
    if (this.updatedData.username === '') {
      this.userNameErrorMessage = 'Gebruikersnaam mag niet leeg zijn';
      this.submitted = false;
    } else {
      this.userNameErrorMessage = '';
    }
    if (!this.emailErrorMessage && !this.firstNameErrorMessage && !this.lastNameErrorMessage && !this.userNameErrorMessage) {
      this.updateUserData();
    }
  }

  updateUserData() {
    if (this.networkService.getNetworkStatus()) {
      this.updatedData.userEmail = this.updatedData.email;
      this.userProxyService.updateUserdataAction(this.updatedData, this.authenticationService.getObjectId())
        .subscribe(
          (response) => {
            this.getUserDataFromCloud();
            this.editUserData = !this.editUserData;
            this.cancelButton = false;
            this.editButton = true;
            this.toggleEditView = false;
          },
          (error) => {
            this.toastMessageService.presentToast(
              `Error, de gebruiker kon niet worden bijgewerkt. Status: ${error.status}`, 3500);
          });
    } else {
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  async removeProfilePicture() {
    if (this.networkService.getNetworkStatus()) {
      this.loadingImage = true;
      const getUrl = window.location;
      const baseUrl = getUrl.protocol + '//' + getUrl.host + '/assets/icon/DNTUserDARK.png';
      const urlRawData = await this.photoService.toDataURL(baseUrl)
        .then(dataUrl => this.photoService.dataURItoBlob(dataUrl));

      this.userProxyService.postImageAction(urlRawData)
        .subscribe(
          (result) => {
            const data = {
              profilePicture: {
                name: result.name,
                url: result.url,
                __type: 'File'
              }
            };
            this.userProxyService.updateUserImageAction(data, this.authenticationService.getObjectId())
              .subscribe(
                (status) => {
                  this.getUserDataFromCloud();
                },
                (error) => {
                  this.loadingImage = false;
                  this.toastMessageService.presentToast(
                    `Error, de gebruiker kon niet worden bijgewerkt. Status: ${error.status}`, 3500);
                });
          },
          (error) => {
            this.loadingImage = false;
            this.toastMessageService.presentToast(
              `Error, de afbeelding kon niet worden opgeslaan. Status: ${error.status}`, 3500);
          });
    } else {
      this.loadingImage = false;
      await this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  changeProfilePicture() {
    if (this.networkService.getNetworkStatus()) {
      this.loadingImage = true;
      const photo = this.photoService.capturePhoto();
      photo.then(async (response) => {
        const urlRawData = await this.photoService.toDataURL(response.webPath)
          .then(dataUrl => this.photoService.dataURItoBlob(dataUrl));

        this.userProxyService.postImageAction(urlRawData)
          .subscribe(
            (result) => {
              const imageData = {
                profilePicture: {
                  name: result.name,
                  url: result.url,
                  __type: 'File'
                }
              };
              this.userProxyService.updateUserImageAction(imageData, this.authenticationService.getObjectId())
                .subscribe(
                  (status) => {
                    this.getUserDataFromCloud();
                  },
                  (error) => {
                    this.loadingImage = false;
                    this.toastMessageService.presentToast(
                      `Error, de gebruiker kon niet worden bijgewerkt. Status: ${error.status}`, 3500);
                  });
            },
            (error) => {
              this.toastMessageService.presentToast(
                `Error, de afbeelding kon niet worden opgeslaan. Status: ${error.status}`, 3500);
            });
      }, () => {
        this.loadingImage = false;
      });
    } else {
      this.loadingImage = false;
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  firstNameValueChanged(firstNameValue: string) {
    this.updatedData.firstname = firstNameValue;
  }

  lastNameValueChanged(lastNameValue: string) {
    this.updatedData.lastname = lastNameValue;
  }

  userNameValueChanged(userNameValue: string) {
    this.updatedData.username = userNameValue;
  }

  emailValueChanged(emailValue: string) {
    this.updatedData.email = emailValue;
  }

  goBack() {
    this.location.back();
  }
}
