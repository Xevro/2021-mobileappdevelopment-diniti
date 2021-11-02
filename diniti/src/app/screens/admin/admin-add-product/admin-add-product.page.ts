import {Component, OnInit, ViewChild} from '@angular/core';
import {Image, Routes} from '../../../models/core-models';
import {Router} from '@angular/router';
import {FieldTypes} from '../../../models/ui-models';
import {PhotoService} from '../../../services/ui-services';
import {ProductsProxyService} from '../../../services/backend-services';
import {Product} from '../../../models/backend-models';
import {IonToggle} from '@ionic/angular';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.page.html',
  styleUrls: ['./admin-add-product.page.scss'],
})
export class AdminAddProductPage implements OnInit {
  @ViewChild('visibility', {static: true}) visibilityToggle: IonToggle;

  fieldTypes = FieldTypes;

  submitted = true;
  loadingImage = false;
  uploadingImageDone = false;
  imageResultData: Image;

  product: Product = {visibility: false} as Product;

  nameErrorMessage: string = null;
  priceErrorMessage: string = null;
  fieldsErrorMessage: string = null;
  imageError = false;

  constructor(
    private router: Router,
    private photoService: PhotoService,
    private productsProxyService: ProductsProxyService,
    private currencyPipe: CurrencyPipe
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.product = {
      visibility: false,
      name: '',
      price: 0.0
    };
  }

  changeVisibility() {
    this.product.visibility = this.visibilityToggle.checked;
  }

  goToProducts() {
    this.router.navigate(Routes.adminProducts);
  }

  saveNewProduct() {
    if (this.product.name && this.product.price) {
      this.fieldsErrorMessage = '';
      if (this.imageResultData) {
        this.product.image = {
          name: this.imageResultData.name,
          url: this.imageResultData.url,
          __type: 'File'
        };
        this.productsProxyService.postProductAction(this.product)
          .subscribe(
            (status) => {
              this.goToProducts();
            },
            (error) => {
              this.fieldsErrorMessage = 'Er is een onverwacht probleem opgetreden.';
            });
      } else {
        this.productsProxyService.postProductAction(this.product)
          .subscribe(
            (status) => {
              this.goToProducts();
            },
            (error) => {
              this.fieldsErrorMessage = 'Er is een onverwacht probleem opgetreden.';
            });
      }
    } else {
      this.fieldsErrorMessage = 'Naam en of prijs zijn niet ingevuld';
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
            this.imageError = false;
          },
          (error) => {
            this.uploadingImageDone = false;
            this.imageError = true;
          });
    });
  }

  removeProductImage() {
    this.imageResultData = null;
    this.uploadingImageDone = false;
  }

  nameValueChanged(nameValue: string) {
    if (nameValue.trim().length !== 0) {
      this.product.name = nameValue.trim();
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
}
