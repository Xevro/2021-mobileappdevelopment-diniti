import {Component, Input} from '@angular/core';
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
export class OrderListItemComponent {

  @Input() order: Order;
  currentRole: Role;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ionViewWillEnter() {
    this.currentRole = this.authenticationService.getRole();
  }

  goToDetailPage() {
    if (this.currentRole === Role.admin) {
      this.router.navigate(Routes.adminOrderDetail(this.order.orderUuid.toString()));
    } else if (this.currentRole === Role.user) {
      this.router.navigate(Routes.userOrderDetail(this.order.orderUuid.toString()));
    }
  }
}
