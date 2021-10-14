import {Component, OnInit} from '@angular/core';
import {Routes} from '../../models';
import {FieldTypes} from '../../models/field-types.enum';
import {Router} from '@angular/router';
import {LoginProxyService} from '../../services/backend-services/login-proxy.service';
import {AuthenticationService} from '../../services/ui-services';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  fieldTypes = FieldTypes;

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
    private loginProxyService: LoginProxyService,
    private userContext: AuthenticationService) {
  }

  ngOnInit() {
  }

  validateLogin() {
    this.loginProxyService.loginAction('louis', 'abc')
      .subscribe(
        (response) => {
          this.userContext.userLoggedIn(response);
          this.router.navigate(Routes.userOverview);
        },
        (error) => {
          console.error('Request failed with error');
        });
  }
}
