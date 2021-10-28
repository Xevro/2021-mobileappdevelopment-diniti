import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/backend-models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  order: Order;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // load data from server met orderId
    console.log(this.activatedRoute.snapshot.params.orderId);
  }

}
