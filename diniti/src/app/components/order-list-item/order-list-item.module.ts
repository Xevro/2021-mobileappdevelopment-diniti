import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {OrderListItemComponent} from './order-list-item.component';
import {StringToDatePipe} from '../../services/ui-services';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [OrderListItemComponent, StringToDatePipe],
  exports: [OrderListItemComponent]
})
export class OrderListItemModule {}
