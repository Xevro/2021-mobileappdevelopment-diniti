import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUserPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import {InputFieldComponent} from '../../components/input-field/input-field.component';
import {ButtonComponent} from '../../components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterUserPageRoutingModule
  ],
  declarations: [RegisterPage, InputFieldComponent, ButtonComponent]
})
export class RegisterUserPageModule {}
