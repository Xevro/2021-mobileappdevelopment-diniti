import {Component, OnInit} from '@angular/core';
import {Routes} from '../../models';
import {FieldTypes} from '../../models/field-types.enum';
import {Router} from '@angular/router';
import {LoginProxyService} from '../../services/backend-services/login-proxy.service';

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

  constructor(private router: Router, private loginProxyService: LoginProxyService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loginProxyService.getData()
      .subscribe(
        (response) => {
          console.log('response received');
          console.log(response);
        },
        (error) => {
          console.error('Request failed with error');
        });
  }

  validateLogin() {
    this.router.navigate(Routes.userOverview);
  }
}
