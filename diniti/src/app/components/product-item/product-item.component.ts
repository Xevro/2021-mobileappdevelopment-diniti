import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/backend-models';
import {AlertController} from '@ionic/angular';
import {ProductsProxyService} from '../../services/backend-services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() hideUserButtons = false;
  @Input() showAdminButtons = false;
  @Input() hideCount = false;
  @Input() product: Product;

  @Output() changedProduct = new EventEmitter<Product>();
  @Output() removedProduct = new EventEmitter<boolean>();

  constructor(
    private alertController: AlertController,
    private productsProxyService: ProductsProxyService
  ) {
  }

  ngOnInit() {
  }

  countUpProductAmount() {
    if (this.product.amount) {
      this.product.amount++;
    } else {
      this.product.amount = 1;
    }
    this.changedProduct.emit(this.product);
  }

  countDownProductAmount() {
    if (this.product.amount >= 1) {
      this.product.amount -= 1;
      this.changedProduct.emit(this.product);
    }
  }

  async deleteProduct() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Opgelet',
      message: 'Bent u zeker dat u "' + this.product.name + '" wilt verwijderen?',
      buttons: [
        {
          text: 'Verwijder',
          cssClass: 'btns-modal-alert',
          handler: () => {
            this.productsProxyService.deleteProductsAction(this.product.objectId)
              .subscribe(
                (response) => {
                  this.removedProduct.emit(true);
                },
                (error) => {
                });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel'
        }
      ]
    });
    await alert.present();
  }


  toggleVisibility(visibility: boolean) {
    this.product.visibility = visibility;
  }
}
