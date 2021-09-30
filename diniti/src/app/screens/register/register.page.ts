import {Component, OnInit} from '@angular/core';
import {RouteLiterals} from '../../models';
import {FieldTypes} from '../../models/field-types.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  fieldTypes = FieldTypes;

  get imageSrc(): string {
    return './assets/icon/cancel-x.svg';
  }

  get onboardingRoute(): string {
    return '/' + RouteLiterals.onboarding;
  }

  get loginRoute(): string {
    return '/' + RouteLiterals.login;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
