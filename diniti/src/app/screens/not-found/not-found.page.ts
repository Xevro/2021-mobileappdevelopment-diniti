import {Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage {

  constructor(
    private swUpdate: SwUpdate
  ) {
  }

  ionViewWillEnter() {
    this.swUpdate.available.subscribe(() => {
      window.location.reload();
    });
  }
}
