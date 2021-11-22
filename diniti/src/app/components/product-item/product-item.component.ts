import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../models/backend-models';
import {AlertController} from '@ionic/angular';
import {ProductsProxyService} from '../../services/backend-services';
import {Routes} from '../../models/core-models';
import {Router} from '@angular/router';
import {Role} from '../../models/authentication-models';
import {AuthenticationService} from '../../services/authentication-services';
import {ToastMessageService} from '../../services/ui-services';
import {NetworkService} from '../../services/core-services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {

  @Input() hideUserButtons = false;
  @Input() showAdminButtons = false;
  @Input() hideCount = false;
  @Input() product: Product;

  @Output() changedProduct = new EventEmitter<Product>();
  @Output() removedProduct = new EventEmitter<boolean>();

  loading = false;
  currentRole: Role;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private alertController: AlertController,
    private toastMessageService: ToastMessageService,
    private productsProxyService: ProductsProxyService,
    private authenticationService: AuthenticationService
  ) {
    this.currentRole = this.authenticationService.getRole() ?? Role.user;
  }

  ionViewWillEnter() {
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
    if (this.networkService.getNetworkStatus()) {
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
                    this.toastMessageService.presentToast(
                      `Error, het product kon niet worden verwijderd. Status: ${error.status}`, 3500);
                  });
            }
          },
          {
            text: 'Annuleer',
            role: 'Annuleer',
            cssClass: 'modal-button-cancel'
          }
        ]
      });
      await alert.present();
    } else {
      await this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  toggleVisibility(visibility: boolean) {
    if (this.networkService.getNetworkStatus()) {
      this.loading = true;
      this.product.visibility = visibility;
      this.productsProxyService.updateProductVisibilityAction(this.product.visibility, this.product.objectId)
        .subscribe(
          (response) => {
            this.loading = false;
          },
          (error) => {
            this.loading = false;
            this.toastMessageService.presentToast(
              `Error, de zichtbaarheid kon niet worden gewijzigd. Status: ${error.status}`, 3500);
          });
    } else {
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  goToDetailPage() {
    if (this.currentRole === Role.admin) {
      this.router.navigate(Routes.adminProductDetail(this.product.productId.toString()));
    } else {
      this.router.navigate(Routes.userProductDetail(this.product.productId.toString()));
    }
  }
}
