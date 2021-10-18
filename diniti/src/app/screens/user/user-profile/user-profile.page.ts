import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication-services';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logOut();
    this.router.navigate(Routes.onboarding);
  }
}
