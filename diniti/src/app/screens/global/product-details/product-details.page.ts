import {Component} from '@angular/core';
import {Product, UpdateProduct} from '../../../models/backend-models';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsProxyService} from '../../../services/backend-services';
import {Role} from '../../../models/authentication-models';
import {AuthenticationService} from '../../../services/authentication-services';
import {FieldTypes} from '../../../models/ui-models';
import {Image} from '../../../models/core-models';
import {CurrencyPipe, Location} from '@angular/common';
import {PhotoService, ToastMessageService} from '../../../services/ui-services';
import {NetworkService} from '../../../services/core-services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage {

  product: Product;
  updateProduct: UpdateProduct = {} as UpdateProduct;
  loading = false;
  error = false;
  edit = false;
  role = Role;
  currentRole: Role;
  fieldTypes = FieldTypes;

  loadingImage = false;
  uploadingImageDone = false;
  imageResultData: Image;

  nameErrorMessage: string = null;
  priceErrorMessage: string = null;
  descriptionErrorMessage: string = null;
  validationMessage: string = null;
  imageError = false;

  constructor(
    private router: Router,
    private location: Location,
    private photoService: PhotoService,
    private currencyPipe: CurrencyPipe,
    private activatedRoute: ActivatedRoute,
    private networkService: NetworkService,
    private toastMessageService: ToastMessageService,
    private productsProxyService: ProductsProxyService,
    public authenticationService: AuthenticationService
  ) {
  }

  ionViewWillEnter() {
    this.getOrderData();
    this.currentRole = this.authenticationService.getRole();
  }

  getOrderData() {
    this.loading = true;
    this.productsProxyService.getProductByIdAction(this.activatedRoute.snapshot.params.productUuid)
      .subscribe(
        (response) => {
          this.product = response?.results[0];
          this.updateProduct.name = this.product.name;
          this.updateProduct.price = this.product.price;
          this.updateProduct.visibility = this.product.visibility;
          this.updateProduct.description = this.product.description;
          this.loading = false;
          this.error = !this.product?.productId;
        },
        (error) => {
          this.error = true;
          this.toastMessageService.presentToast(
            `Error, de gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
        });
  }

  editProduct() {
    this.edit = true;
  }

  changeVisibility(visibility: any) {
    this.product.visibility = visibility.target.checked;
    this.updateProduct.visibility = visibility.target.checked;
  }

  SaveEditProduct() {
    if (this.networkService.getNetworkStatus()) {
      if (this.updateProduct.name && this.updateProduct.price && this.updateProduct.description) {
        this.error = false;
        if (this.imageResultData) {
          this.updateProduct.image = {
            name: this.imageResultData.name,
            url: this.imageResultData.url,
            __type: 'File'
          };
          this.productsProxyService.updateProductAction(this.updateProduct, this.product.objectId)
            .subscribe(
              (status) => {
                this.edit = false;
                this.getOrderData();
              },
              (error) => {
                this.error = true;
                this.toastMessageService.presentToast(
                  `Error, de gegevens konden niet worden opgeslaan. Status: ${error.status}`, 3500);
              });
        } else {
          this.productsProxyService.updateProductAction(this.updateProduct, this.product.objectId)
            .subscribe(
              (status) => {
                this.edit = false;
                this.getOrderData();
              },
              (error) => {
                this.error = true;
                this.toastMessageService.presentToast(
                  `Error, de gegevens konden niet worden opgeslaan. Status: ${error.status}`, 3500);
              });
        }
      } else {
        this.validationMessage = 'Naam, beschrijving en of prijs zijn niet ingevuld';
      }
    } else {
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  uploadProductImage() {
    if (this.networkService.getNetworkStatus()) {
      this.loadingImage = true;
      const photo = this.photoService.capturePhoto();
      photo.then(async (response) => {
        const urlRawData = await this.photoService.toDataURL(response.webPath)
          .then(dataUrl => this.photoService.dataURItoBlob(dataUrl));

        this.productsProxyService.postImageAction(urlRawData)
          .subscribe(
            (result) => {
              this.imageResultData = result;
              this.loadingImage = false;
              this.uploadingImageDone = true;
              this.edit = false;
              this.imageError = false;
            },
            (error) => {
              this.uploadingImageDone = false;
              this.imageError = true;
              this.toastMessageService.presentToast(
                `Error, de afbeelding kon niet worden opgeslaan. Status: ${error.status}`, 3500);
            });
      });
    } else {
      this.loadingImage = false;
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  changeProductPicture() {
    if (this.networkService.getNetworkStatus()) {
      this.loadingImage = true;
      const photo = this.photoService.capturePhoto();
      photo.then(async (response) => {
        const urlRawData = await this.photoService.toDataURL(response.webPath)
          .then(dataUrl => this.photoService.dataURItoBlob(dataUrl));

        this.productsProxyService.postImageAction(urlRawData)
          .subscribe(
            (result) => {
              const data = {
                image: {
                  name: result.name,
                  url: result.url,
                  __type: 'File'
                }
              };
              this.productsProxyService.updateProductImageAction(data, this.product.objectId)
                .subscribe(
                  (status) => {
                    this.loadingImage = false;
                    this.edit = false;
                    this.getOrderData();
                  },
                  (error) => {
                    this.loadingImage = false;
                    this.toastMessageService.presentToast(
                      `Error, de afbeelding kon niet worden opgeslaan. Status: ${error.status}`, 3500);
                  });
            },
            (error) => {
              this.loadingImage = false;
              this.toastMessageService.presentToast(
                `Error, de afbeelding kon niet worden opgeslaan. Status: ${error.status}`, 3500);
            });
      });
    } else {
      this.loadingImage = false;
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  async removeProductPicture() {
    if (this.networkService.getNetworkStatus()) {
      this.loadingImage = true;
      this.imageResultData = null;
      this.uploadingImageDone = false;
      const getUrl = window.location;
      const baseUrl = getUrl.protocol + '//' + getUrl.host + '/assets/icon/diniti-logo.png';
      const urlRawData = await this.photoService.toDataURL(baseUrl)
        .then(dataUrl => this.photoService.dataURItoBlob(dataUrl));

      this.productsProxyService.postImageAction(urlRawData)
        .subscribe(
          (result) => {
            const data = {
              image: {
                name: result.name,
                url: result.url,
                __type: 'File'
              }
            };
            this.productsProxyService.updateProductImageAction(data, this.product.objectId)
              .subscribe(
                (status) => {
                  this.loadingImage = false;
                  this.edit = false;
                  this.getOrderData();
                },
                (error) => {
                  this.loadingImage = false;
                  this.toastMessageService.presentToast(
                    `Error, de afbeelding kon niet worden opgeslaan. Status: ${error.status}`, 3500);
                });
          },
          (error) => {
            this.loadingImage = false;
            this.toastMessageService.presentToast(
              `Error, de afbeelding kon niet worden opgeslaan. Status: ${error.status}`, 3500);
          });
    } else {
      this.loadingImage = false;
      await this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  hideEditProduct() {
    this.edit = false;
  }

  nameValueChanged(nameValue: string) {
    if (nameValue?.trim().length !== 0) {
      this.updateProduct.name = nameValue;
      this.nameErrorMessage = '';
    } else {
      this.nameErrorMessage = 'Naam kan niet leeg zijn';
    }
  }

  priceValueChanged(priceValue: string) {
    try {
      this.updateProduct.price = Number(this.currencyPipe.transform(priceValue, 'EUR')
        .replace('€', '')
        .replace(',', ''));
      this.priceErrorMessage = '';
    } catch (error) {
      this.priceErrorMessage = 'Geen geldig bedrag';
    }
  }

  descriptionValueChanged(descriptionValue: any) {
    const description = descriptionValue.target.value;
    if (description?.trim().length !== 0) {
      this.updateProduct.description = description;
      this.descriptionErrorMessage = '';
    } else {
      this.descriptionErrorMessage = 'Beschrijving kan niet leeg zijn';
    }
  }

  goBack() {
    this.location.back();
  }
}
