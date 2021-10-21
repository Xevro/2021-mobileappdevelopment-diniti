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

  editUserData: boolean;
  editButtonText = 'Bewerk';
  fieldTypes = FieldTypes;

  firstname: string;
  lastname: string;
  username: string;
  email: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logOut();
    this.router.navigate(Routes.onboarding);
  }

  handleEditUserData() {
    this.editUserData = !this.editUserData;
    this.editUserData ? this.editButtonText = 'Bewaar' : this.editButtonText = 'Bewerk';
  }

  firstNameValueChanged(firstNameValue: string) {
    this.firstname = firstNameValue.trim();
  }

  lastNameValueChanged(lastNameValue: string) {
    this.lastname = lastNameValue;
  }

  userNameValueChanged(userNameValue: string) {
    this.username = userNameValue;
  }

  emailValueChanged(emailValue: string) {
    this.email = emailValue;
  }
}
