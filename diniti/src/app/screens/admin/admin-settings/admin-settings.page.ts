import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {SettingsProxyService} from '../../../services/backend-services';
import {NetworkService, OfflineStorageManager, UuidGenerator} from '../../../services/core-services';
import {StoreSettings} from '../../../models/backend-models';
import {ToastMessageService} from '../../../services/ui-services';
import {Methods} from '../../../models/core-models';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.page.html',
  styleUrls: ['./admin-settings.page.scss'],
})
export class AdminSettingsPage {

  loading = false;
  loadingPutRequest = false;
  error = false;
  settings: StoreSettings = {} as StoreSettings;
  edit = false;
  startHour: any;
  closingHour: any;

  constructor(
    private location: Location,
    private uuidGenerator: UuidGenerator,
    private networkService: NetworkService,
    private toastMessageService: ToastMessageService,
    private settingsProxyService: SettingsProxyService,
    private offlineStorageManager: OfflineStorageManager
  ) {
  }

  ionViewWillEnter() {
    this.loading = true;
    this.settingsProxyService.getSettingsAction()
      .subscribe((result) => {
          this.settings = result.results[0];
          this.startHour = this.settings.startHour.iso;
          this.closingHour = this.settings.closingHour.iso;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this.error = true;
          this.toastMessageService.presentToast(
            `Error, de instellingen konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }

  saveSettings() {
    this.loadingPutRequest = true;
    this.settings.startHour = {__type: 'Date', iso: this.startHour};
    this.settings.closingHour = {__type: 'Date', iso: this.closingHour};
    if (this.networkService.isOnline) {
      this.settingsProxyService.updateSettingsAction(this.settings, this.settings.objectId)
        .subscribe((response) => {
          },
          (error) => {
            this.error = true;
            this.toastMessageService.presentToast(
              `Error, de instellingen konden niet worden gewijzigd. Status: ${error.status}`, 3500);
          });
    } else {
      const headerOptions = {'Content-Type': 'application/json'};
      const payload = {
        status: this.settings.status,
        startHour: this.settings.startHour,
        closingHour: this.settings.closingHour
      };
      this.offlineStorageManager.addRequestToStorage({
        id: this.uuidGenerator.generateUUID(),
        method: Methods.PUT,
        url: `classes/Settings/${this.settings.objectId}`,
        payload,
        headerOptions
      });
      this.toastMessageService.presentToast('De instellingen wordt gewijzigd van zodra er terug internet beschikbaar is.', 3500);
    }
    this.loadingPutRequest = false;
    this.edit = false;
  }

  changeStartHour(startHour: any) {
    this.startHour = startHour.detail.value;
  }

  changeClosingHour(closingHour: any) {
    this.closingHour = closingHour.detail.value;
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
