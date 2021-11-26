import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {SettingsProxyService} from '../../../services/backend-services';
import {NetworkService} from '../../../services/core-services';
import {StoreSettings} from '../../../models/backend-models';
import {ToastMessageService} from '../../../services/ui-services';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.page.html',
  styleUrls: ['./admin-settings.page.scss'],
})
export class AdminSettingsPage {

  loading = false;
  errorMessage = false;
  settings: StoreSettings;
  edit = false;

  constructor(
    private location: Location,
    private networkService: NetworkService,
    private toastMessageService: ToastMessageService,
    private settingsProxyService: SettingsProxyService
  ) {
  }

  ionViewWillEnter() {
    if (this.networkService.isOnline) {
      this.settingsProxyService.getSettingsAction()
        .subscribe((result) => {
            this.settings = result.results[0];
          },
          (error) => {
            this.toastMessageService.presentToast(
              `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
          });
    }
  }

  saveSettings() {

  }

  changeStoreStatus(status: any) {
    this.settings.status = status.target.checked;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  goBack() {
    this.location.back();
  }
}
