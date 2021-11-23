import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../models/backend-models';
import {AlertController} from '@ionic/angular';
import {ProductsProxyService} from '../../services/backend-services';
import {Methods, Routes} from '../../models/core-models';
import {Router} from '@angular/router';
import {Role} from '../../models/authentication-models';
import {AuthenticationService} from '../../services/authentication-services';
import {ToastMessageService} from '../../services/ui-services';
import {NetworkService, OfflineStorageManager} from '../../services/core-services';

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
    private authenticationService: AuthenticationService,
    private offlineStorageManager: OfflineStorageManager
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
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Opgelet',
      message: 'Bent u zeker dat u "' + this.product.name + '" wilt verwijderen?',
      buttons: [
        {
          text: 'Verwijder',
          cssClass: 'btns-modal-alert',
          handler: () => {
            if (this.networkService.isOnline) {
              this.productsProxyService.deleteProductsAction(this.product.objectId)
                .subscribe(
                  (response) => {
                    this.removedProduct.emit(true);
                  },
                  (error) => {
                    this.toastMessageService.presentToast(
                      `Error, het product kon niet worden verwijderd. Status: ${error.status}`, 3500);
                  });
            } else {
              this.offlineStorageManager.addRequestToStorage({
                method: Methods.DELETE,
                url: `classes/Products/${this.product.objectId}`
              });
              this.toastMessageService.presentToast('Het product zal verwijderd worden van zodra er terug internet beschikbaar is.', 3500);
            }
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
  }

  toggleVisibility(visibility: boolean) {
    if (this.networkService.isOnline) {
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
      const headerOptions = {
        'Content-Type': 'application/json'
      };
      const body = {
        visibility
      };
      this.offlineStorageManager.addRequestToStorage({
        method: Methods.PUT,
        url: `classes/Products/${this.product.objectId}`,
        payload: body,
        headerOptions
      });
      this.loading = false;
      this.toastMessageService.presentToast('De zichtbaarheid zal gewijzigd worden van zodra er terug internet beschikbaar is.', 3500);
    }
  }

  goToDetailPage() {
    if (this.product.productId) {
      if (this.currentRole === Role.admin) {
        this.router.navigate(Routes.adminProductDetail(this.product.productId.toString()));
      } else {
        this.router.navigate(Routes.userProductDetail(this.product.productId.toString()));
      }
    } else {
      this.router.navigate(Routes.userProductDetail('error'));
    }
  }
}
