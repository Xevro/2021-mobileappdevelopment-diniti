import {Component} from '@angular/core';
import {Routes} from '../../../models/core-models';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.page.html',
  styleUrls: ['./order-complete.page.scss'],
})
export class OrderCompletePage {

  constructor() {
  }

  ionViewWillEnter() {
  }

  getOverviewUrl() {
    return Routes.userOverview;
  }

}
