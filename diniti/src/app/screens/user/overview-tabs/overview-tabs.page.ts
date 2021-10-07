import {Component, ViewChild} from '@angular/core';
import {IonTabs} from '@ionic/angular';

@Component({
  selector: 'app-overview-tabs',
  templateUrl: 'overview-tabs.page.html',
  styleUrls: ['overview-tabs.page.scss']
})
export class OverviewTabsPage {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  constructor() {}

  setCurrentTab() {
    //this.selectedTab = this.tabs.getSelected();
    console.log(this.tabs.getSelected());
  }
}
