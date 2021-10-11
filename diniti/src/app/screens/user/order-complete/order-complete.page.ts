import {Component, OnInit} from '@angular/core';
import {Routes} from '../../../models';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.page.html',
  styleUrls: ['./order-complete.page.scss'],
})
export class OrderCompletePage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getOverviewUrl() {
    return Routes.userOverview;
  }

}
