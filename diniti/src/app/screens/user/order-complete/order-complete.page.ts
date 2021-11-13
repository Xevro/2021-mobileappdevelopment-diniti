import {Component} from '@angular/core';
import {Routes, Time} from '../../../models/core-models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.page.html',
  styleUrls: ['./order-complete.page.scss'],
})
export class OrderCompletePage {

  pickUpTime: Time;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pickUpTime = this.router.getCurrentNavigation().extras.state.pickUpTime;
      }
    });
  }

  ionViewWillEnter() {
  }

  getOverviewUrl() {
    localStorage.removeItem('orderComplete');
    localStorage.removeItem('products');
    return Routes.userOverview;
  }

  goToOverview() {
    localStorage.removeItem('orderComplete');
    localStorage.removeItem('products');
    this.router.navigate(Routes.userOverview);
  }
}
