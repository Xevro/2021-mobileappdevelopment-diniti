import {Component} from '@angular/core';
import {Image, Methods, Routes} from '../../../models/core-models';
import {Router} from '@angular/router';
import {FieldTypes} from '../../../models/ui-models';
import {PhotoService, ToastMessageService} from '../../../services/ui-services';
import {ProductsProxyService} from '../../../services/backend-services';
import {Product} from '../../../models/backend-models';
import {CurrencyPipe, Location} from '@angular/common';
import {NetworkService, OfflineStorageManager, UuidGenerator} from '../../../services/core-services';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.page.html',
  styleUrls: ['./admin-add-product.page.scss'],
})
export class AdminAddProductPage {

  fieldTypes = FieldTypes;
  loading = false;
  submitted = true;
  loadingImage = false;
  uploadingImageDone = false;
  imageResultData: Image;
  routes = Routes;

  product: Product = {visibility: false} as Product;

  nameErrorMessage: string = null;
  priceErrorMessage: string = null;
  descriptionErrorMessage: string = null;
  validationMessage: string = null;
  errorMessage = false;
  imageError = false;

  constructor(
    private router: Router,
    private location: Location,
    private photoService: PhotoService,
    private currencyPipe: CurrencyPipe,
    private uuidGenerator: UuidGenerator,
    private networkService: NetworkService,
    private toastMessageService: ToastMessageService,
    private productsProxyService: ProductsProxyService,
    private offlineStorageManager: OfflineStorageManager
  ) {
  }

  ionViewWillEnter() {
    this.product = {
      visibility: false,
      name: '',
      description: '',
      price: 0.0
    };
  }

  changeVisibility(visibility: any) {
    this.product.visibility = visibility.target.checked;
  }

  goToProducts() {
    this.loading = false;
    this.router.navigate(Routes.adminProducts);
  }

  saveNewProduct() {
    if (this.product.name && this.product.price) {
      this.loading = true;
      this.errorMessage = false;
      this.validationMessage = null;
      if (this.imageResultData) {
        this.product.image = {
          name: this.imageResultData.name,
          url: this.imageResultData.url,
          __type: 'File'
        };
        this.product.productId = this.uuidGenerator.generateUUID();
        if (this.networkService.isOnline) {
          this.productsProxyService.postProductAction(this.product)
            .subscribe((status) => {
                this.goToProducts();
              },
              (error) => {
                this.loading = false;
                this.errorMessage = true;
                this.toastMessageService.presentToast(
                  `Error, de product gegevens konden niet worden verstuurd. Status: ${error.status}`, 3500);
              });
        } else {
          this.offlineStorageManager.addRequestToStorage({
            method: Methods.POST,
            payload: this.product,
            url: 'classes/Products'
          });
          this.loading = false;
          this.toastMessageService.presentToast('Het product wordt toegevoegd van zodra er terug internet beschikbaar is.', 3500);
          this.goToProducts();
        }
      } else {
        this.product.productId = this.uuidGenerator.generateUUID();
        if (this.networkService.isOnline) {
          this.productsProxyService.postProductAction(this.product)
            .subscribe((status) => {
                this.goToProducts();
              },
              (error) => {
                this.errorMessage = true;
                this.toastMessageService.presentToast(
                  `Error, de product gegevens konden niet worden opgehaald. Status: ${error.status}`, 3500);
              });
        } else {
          this.offlineStorageManager.addRequestToStorage({
            method: Methods.POST,
            payload: this.product,
            url: 'classes/Products'
          });
          this.loading = false;
          this.toastMessageService.presentToast('Het product wordt toegevoegd van zodra er terug internet beschikbaar is.', 3500);
          this.goToProducts();
        }
      }
    } else {
      this.validationMessage = 'Naam en of prijs zijn niet ingevuld.';
    }
  }

  uploadProductImage() {
    if (this.networkService.isOnline) {
      this.loadingImage = true;
      const photo = this.photoService.capturePhoto();
      photo.then(async (response) => {
        const urlRawData = await this.photoService.toDataURL(response.webPath)
          .then(dataUrl => this.photoService.dataURItoBlob(dataUrl));

        this.productsProxyService.postImageAction(urlRawData)
          .subscribe((result) => {
              this.imageResultData = result;
              this.loadingImage = false;
              this.uploadingImageDone = true;
              this.imageError = false;
            },
            (error) => {
              this.uploadingImageDone = false;
              this.imageError = true;
              this.toastMessageService.presentToast(
                `Error, de afbeelding konden niet worden opgeslaan. Status: ${error.status}`, 3500);
            });
      }, () => {
        this.loadingImage = false;
        this.uploadingImageDone = true;
        this.imageError = false;
      });
    } else {
      this.loadingImage = false;
      this.toastMessageService.presentToast('Er is geen netwerk verbinding...', 3000);
    }
  }

  removeProductImage() {
    this.imageResultData = null;
    this.uploadingImageDone = false;
  }

  nameValueChanged(nameValue: string) {
    if (nameValue.length !== 0) {
      this.product.name = nameValue;
      this.nameErrorMessage = '';
    } else {
      this.nameErrorMessage = 'Naam kan niet leeg zijn';
    }
  }

  priceValueChanged(priceValue: string) {
    try {
      this.product.price = Number(this.currencyPipe.transform(priceValue, 'EUR')
        .replace('€', '')
        .replace(',', ''));
      this.priceErrorMessage = '';
    } catch (error) {
      this.priceErrorMessage = 'Geen geldig bedrag';
    }
  }

  descriptionValueChanged(descriptionValue: any) {
    const description = descriptionValue.target.value;
    if (description.length !== 0) {
      this.product.description = description;
      this.descriptionErrorMessage = '';
    } else {
      this.descriptionErrorMessage = 'Beschrijving kan niet leeg zijn';
    }
  }

  goBack() {
    this.location.back();
  }
}
