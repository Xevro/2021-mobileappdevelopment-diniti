import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  appIcon = '../../../assets/icon/diniti-logo.svg';

  constructor() { }

  ngOnInit() {
  }

}
