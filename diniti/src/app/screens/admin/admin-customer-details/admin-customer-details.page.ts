import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NetworkService} from '../../../services/core-services';
import {UserProxyService} from '../../../services/backend-services';
import {AuthenticationService} from '../../../services/authentication-services';
import {User} from '../../../models/backend-models';
import {Role} from '../../../models/authentication-models';
import {ToastMessageService} from '../../../services/ui-services';

@Component({
  selector: 'app-admin-customer-details',
  templateUrl: './admin-customer-details.page.html',
  styleUrls: ['./admin-customer-details.page.scss'],
})
export class AdminCustomerDetailsPage {

  user: User;
  loading = false;
  error = false;
  role = Role;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private userProxyService: UserProxyService,
    private toastMessageService: ToastMessageService,
    public authenticationService: AuthenticationService
  ) {
  }

  ionViewWillEnter() {
    this.getCustomerData();
  }

  getCustomerData() {
    this.loading = true;
    this.userProxyService.getCustomerDataByUuidAction(this.activatedRoute.snapshot.params.customerUuid)
      .subscribe(
        (userData) => {
          this.user = userData?.results[0];
          this.loading = false;
          this.error = !this.user?.customerId;
        },
        (error) => {
          this.error = true;
          this.toastMessageService.presentToast(
            `Error, de klanten gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }

}
