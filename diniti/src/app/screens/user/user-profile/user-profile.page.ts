import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication-services';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';
import {FieldTypes} from '../../../models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  editUserData = false;
  toggleEditView = false;
  editButtonText = 'Bewerk';
  cancelButton = false;
  fieldTypes = FieldTypes;
  submitted = false;

  firstName: string = null;
  lastName: string = null;
  userName: string = null;
  email: string = null;

  firstNameErrorMessage: string = null;
  lastNameErrorMessage: string = null;
  userNameErrorMessage: string = null;
  emailErrorMessage: string = null;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  logout() {
    this.authenticationService.logOut();
    this.router.navigate(Routes.onboarding);
  }

  cancelEditUser() {
    this.toggleEditView = false;
    this.cancelButton = false;
    this.editButtonText = 'Bewerk';
  }

  handleEditUserData() {
    this.toggleEditView = !this.toggleEditView;
    this.toggleEditView ? this.editButtonText = 'Bewaar' : this.editButtonText = 'Bewerk';
    this.cancelButton = true;

    if (!this.toggleEditView) {
      this.submitted = true;
      // eslint-disable-next-line max-len
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.email === null || this.email.length === 0) {
        this.emailErrorMessage = 'Email mag niet leeg zijn';
        this.submitted = false;
      } else {
        if (!emailRegex.test(String(this.email).toLowerCase())) {
          this.emailErrorMessage = 'Email is niet in het juiste formaat';
          this.submitted = false;
        } else {
          this.emailErrorMessage = null;
        }
      }

      if (this.firstName === null) {
        this.firstNameErrorMessage = 'Voornaam mag niet leeg zijn';
        this.submitted = false;
      } else {
        this.firstNameErrorMessage = null;
      }

      if (this.lastName === null) {
        this.lastNameErrorMessage = 'Achternaam mag niet leeg zijn';
        this.submitted = false;
      } else {
        this.lastNameErrorMessage = null;
      }

      if (this.userName === null) {
        this.userNameErrorMessage = 'Gebruikersnaam mag niet leeg zijn';
        this.submitted = false;
      } else {
        this.userNameErrorMessage = null;
      }
    }
    if (this.submitted) {
      this.editUserData = !this.editUserData;
      console.log('alles goed');
      this.cancelButton = false;
    }
  }

  firstNameValueChanged(firstNameValue: string) {
    this.firstName = firstNameValue.trim();
  }

  lastNameValueChanged(lastNameValue: string) {
    this.lastName = lastNameValue;
  }

  userNameValueChanged(userNameValue: string) {
    this.userName = userNameValue;
  }

  emailValueChanged(emailValue: string) {
    this.email = emailValue;
  }
}
