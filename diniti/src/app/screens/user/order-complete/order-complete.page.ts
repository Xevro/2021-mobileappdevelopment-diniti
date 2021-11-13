import {Component} from '@angular/core';
import {Routes} from '../../../models/core-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.page.html',
  styleUrls: ['./order-complete.page.scss'],
})
export class OrderCompletePage {

  pickUpTime: string;

  constructor(
    private router:  Router
  ) {
  }

  ionViewWillEnter() {
  }

  getOverviewUrl() {
    localStorage.removeItem('orderComplete');
    return Routes.userOverview;
  }

  goToOverview() {
    localStorage.removeItem('orderComplete');
    this.router.navigate(Routes.userOverview);
  }
}
