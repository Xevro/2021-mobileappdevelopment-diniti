import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUserPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import {InputFieldModule} from '../../../components/input-field/input-field.module';
import {ButtonModule} from '../../../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterUserPageRoutingModule,
    InputFieldModule,
    ButtonModule
  ],
  declarations: [RegisterPage]
})
export class RegisterUserPageModule {}
