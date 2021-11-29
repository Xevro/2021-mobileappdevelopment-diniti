import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AdminSettingsPageRoutingModule} from './admin-settings-routing.module';
import {AdminSettingsPage} from './admin-settings.page';
import {ButtonModule} from "../../../components/button/button.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdminSettingsPageRoutingModule,
        ButtonModule
    ],
  declarations: [AdminSettingsPage]
})
export class AdminSettingsPageModule {
}
