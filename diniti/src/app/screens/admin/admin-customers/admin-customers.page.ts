import {Component} from '@angular/core';
import {User} from '../../../models/backend-models';
import {Router} from '@angular/router';
import {UserProxyService} from '../../../services/backend-services';
import {ToastMessageService} from '../../../services/ui-services';
import {Role} from '../../../models/authentication-models';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.page.html',
  styleUrls: ['./admin-customers.page.scss'],
})
export class AdminCustomersPage {

  customers: User[];
  filterTerm: string;
  loading = false;
  errorMessage = false;
  message: string;

  constructor(
    private router: Router,
    private userProxyService: UserProxyService,
    private toastMessageService: ToastMessageService
  ) {
  }

  ionViewWillEnter() {
    this.message = null;
    this.getCustomers();
  }

  getCustomers(event?: any) {
    this.loading = true;
    this.message = null;
    this.userProxyService.getAllCustomersAction(Role.user)
      .subscribe(
        (response) => {
          this.customers = response?.results;
          this.loading = false;
          event?.target.complete();
        },
        (error) => {
          event?.target.complete();
          this.loading = false;
          this.errorMessage = true;
          this.toastMessageService.presentToast(
            `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500
          );
        });
  }

  updatedCustomersList(customersEvent: any) {
    this.customers = customersEvent.customers;
  }
}
