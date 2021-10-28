import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../models/backend-models';
import {Routes} from '../../models/core-models';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication-services';
import {Role} from '../../models/authentication-models';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss'],
})
export class OrderListItemComponent implements OnInit {

  @Input() order: Order;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  goToDetailPage() {
    if (this.authenticationService.getRole() === Role.admin) {
      this.router.navigate(Routes.adminOrderDetail(this.order.orderId.toString()));
    } else if (this.authenticationService.getRole() === Role.user) {
      this.router.navigate(Routes.userOrderDetail(this.order.orderId.toString()));
    }
  }
}
