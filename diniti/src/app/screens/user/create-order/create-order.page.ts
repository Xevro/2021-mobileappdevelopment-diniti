import {Component, OnInit} from '@angular/core';
import {RouterExtensionService} from '../../../services/ui-services';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  constructor(private routerExtensionService: RouterExtensionService) {
  }

  ngOnInit() {
  }

  getPreviousUrl() {
    return this.routerExtensionService.getPreviousUrl();
  }
}
