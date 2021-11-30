import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
})
export class TermsAndConditionsPage {

  constructor(
    private location: Location
  ) {
  }

  ionViewWillEnter() {
  }

  goBack() {
    this.location.back();
  }
}
