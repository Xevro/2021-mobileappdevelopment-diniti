import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ResetPasswordPageRoutingModule} from './reset-password-routing.module';
import {ResetPasswordPage} from './reset-password.page';
import {InputFieldModule} from '../../../components/input-field/input-field.module';
import {ButtonModule} from '../../../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    InputFieldModule,
    ButtonModule
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {
}
