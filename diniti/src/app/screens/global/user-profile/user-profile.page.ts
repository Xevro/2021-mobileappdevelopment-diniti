import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication-services';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';
import {FieldTypes} from '../../../models/ui-models';
import {UserProxyService} from '../../../services/backend-services';
import {UpdateUser, User} from '../../../models/backend-models';
import {PhotoService} from '../../../services/ui-services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

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
    private authenticationService: AuthenticationService,
    private userProxyService: UserProxyService,
    private photoService: PhotoService
  ) {
  }

  ngOnInit() {
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
          location.reload(true);
        });
  }

  async removeProfilePicture() {
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
                location.reload(true);
              });
        },
        (error) => {
          location.reload(true);
        });
  }

  changeProfilePicture() {
    this.loadingImage = true;
    const photo = this.photoService.capturePhoto();
    photo.then(async (response) => {
      const urlRawData = await this.photoService.toDataURL(response.webPath)
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
                  location.reload(true);
                });
          },
          (error) => {
            location.reload(true);
          });
    });
  }

  firstNameValueChanged(firstNameValue: string) {
    this.updatedData.firstname = firstNameValue.trim();
  }

  lastNameValueChanged(lastNameValue: string) {
    this.updatedData.lastname = lastNameValue.trim();
  }

  userNameValueChanged(userNameValue: string) {
    this.updatedData.username = userNameValue.trim();
  }

  emailValueChanged(emailValue: string) {
    this.updatedData.email = emailValue.trim();
  }
}
