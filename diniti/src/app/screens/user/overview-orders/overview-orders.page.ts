import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../../../models/core-models';

@Component({
  selector: 'app-overview-orders',
  templateUrl: './overview-orders.page.html',
  styleUrls: ['./overview-orders.page.scss'],
})
export class OverviewOrdersPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  createOrder() {
    this.router.navigate(Routes.userOrderCreate);
  }

}
