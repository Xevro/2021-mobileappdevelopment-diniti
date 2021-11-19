import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/backend-models';
import {Role} from "../../models/authentication-models";
import {Routes} from "../../models/core-models";
import {AuthenticationService} from "../../services/authentication-services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss'],
})
export class CustomerItemComponent {

  @Input() customer: User;

  currentRole: Role;

  @Output() changedCustomer = new EventEmitter<User>();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.currentRole = this.authenticationService.getRole() ?? Role.user;
  }

  ionViewWillEnter() {
  }

  goToDetailPage() {
    if (this.currentRole === Role.admin) {
      this.router.navigate(Routes.adminCustomerDetail(this.customer.customerId.toString()));
    } else {
      this.router.navigate(Routes.adminCustomerDetail('no-customer'));
    }
  }

}
