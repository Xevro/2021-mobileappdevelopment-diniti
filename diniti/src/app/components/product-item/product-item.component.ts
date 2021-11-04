import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/backend-models';
import {AlertController} from '@ionic/angular';
import {ProductsProxyService} from '../../services/backend-services';
import {Routes} from '../../models/core-models';
import {Router} from '@angular/router';
import {Role} from '../../models/authentication-models';
import {AuthenticationService} from '../../services/authentication-services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() hideUserButtons = false;
  @Input() showAdminButtons = false;
  @Input() disableDetail = false;
  @Input() hideCount = false;
  @Input() product: Product;

  @Output() changedProduct = new EventEmitter<Product>();
  @Output() removedProduct = new EventEmitter<boolean>();

  loading = false;
  currentRole: Role;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private productsProxyService: ProductsProxyService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.currentRole = this.authenticationService.getRole();
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
          text: 'Annuleer',
          role: 'Annuleer',
          cssClass: 'modal-button-cancel'
        }
      ]
    });
    await alert.present();
  }

  toggleVisibility(visibility: boolean) {
    this.loading = true;
    this.product.visibility = visibility;
    this.productsProxyService.updateProductVisibilityAction(this.product.visibility, this.product.productId)
      .subscribe(
        (response) => {
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        });
  }

  goToDetailPage() {
    if (this.currentRole === Role.admin && !this.disableDetail) {
      this.router.navigate(Routes.adminProductDetail(this.product.productId.toString()));
    } else if (this.currentRole === Role.user && !this.disableDetail) {
      this.router.navigate(Routes.userProductDetail(this.product.productId.toString()));
    }
  }
}
