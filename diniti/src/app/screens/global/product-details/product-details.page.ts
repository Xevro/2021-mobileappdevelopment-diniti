import {Component} from '@angular/core';
import {Product, UpdateProduct} from '../../../models/backend-models';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsProxyService} from '../../../services/backend-services';
import {Role} from '../../../models/authentication-models';
import {AuthenticationService} from '../../../services/authentication-services';
import {FieldTypes} from '../../../models/ui-models';
import {Image} from '../../../models/core-models';
import {CurrencyPipe} from '@angular/common';
import {PhotoService} from '../../../services/ui-services';

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
  errorMessage: string = null;
  imageError = false;

  constructor(
    private router: Router,
    private photoService: PhotoService,
    private currencyPipe: CurrencyPipe,
    private activatedRoute: ActivatedRoute,
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
    this.productsProxyService.getProductByIdAction(this.activatedRoute.snapshot.params.productId)
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
    if (this.updateProduct.name && this.updateProduct.price && this.updateProduct.description) {
      this.errorMessage = '';
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
              this.errorMessage = 'Er is een onverwacht probleem opgetreden.';
            });
      } else {
        this.productsProxyService.updateProductAction(this.updateProduct, this.product.objectId)
          .subscribe(
            (status) => {
              this.edit = false;
              this.getOrderData();
            },
            (error) => {
              this.errorMessage = 'Er is een onverwacht probleem opgetreden.';
            });
      }
    } else {
      this.errorMessage = 'Naam, beschrijving en of prijs zijn niet ingevuld';
    }
  }

  uploadProductImage() {
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
          });
    });
  }

  changeProductPicture() {
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
                  console.log('error4', error);
                });
          },
          (error) => {
            console.log('error3', error);
          });
    });
  }

  async removeProductPicture() {
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
                console.log('error1', error);
              });
        },
        (error) => {
          console.log('error2', error);
        });
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
}
