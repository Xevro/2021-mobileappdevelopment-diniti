import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminTabsRoutingModule} from './admin-tabs-routing.module';
import {AdminTabsPage} from './admin-tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdminTabsRoutingModule
  ],
  declarations: [AdminTabsPage]
})
export class AdminTabsModule {
}
