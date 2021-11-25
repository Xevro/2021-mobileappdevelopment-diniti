import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.page.html',
  styleUrls: ['./admin-settings.page.scss'],
})
export class AdminSettingsPage {

  loading = false;
  errorMessage = false;

  constructor(
    private location: Location
  ) {
  }

  ionViewWillEnter() {
  }

  saveSettings() {

  }

  goBack() {
    this.location.back();
  }
}
