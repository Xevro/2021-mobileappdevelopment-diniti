import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage {

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
