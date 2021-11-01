import {Component, OnInit} from '@angular/core';
import {Image, Routes} from '../../../models/core-models';
import {Router} from '@angular/router';
import {FieldTypes} from '../../../models/ui-models';
import {PhotoService} from '../../../services/ui-services';
import {ProductsProxyService} from '../../../services/backend-services';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.page.html',
  styleUrls: ['./admin-add-product.page.scss'],
})
export class AdminAddProductPage implements OnInit {

  fieldTypes = FieldTypes;

  submitted = true;
  loadingImage = false;
  uploadingImageDone = false;
  imageResultData: Image;

  nameErrorMessage: string = null;
  priceErrorMessage: string = null;

  constructor(
    private router: Router,
    private photoService: PhotoService,
    private productsProxyService: ProductsProxyService
  ) {
  }

  ngOnInit() {
  }

  goToProducts() {
    this.router.navigate(Routes.adminProducts);
  }

  saveNewProduct() {
    if (this.imageResultData) {
      const data = {
        image: {
          name: this.imageResultData.name,
          url: this.imageResultData.url,
          __type: 'File'
        }
      };
      /*this.userProxyService.putUserImageAction(data, this.authenticationService.getObjectId())
             .subscribe(
               (status) => {
                 this.getUserDataFromCloud();
               },
               (error) => {
                 location.reload(true);
               });*/
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
          },
          (error) => {
            this.uploadingImageDone = false;
            location.reload(true);
          });
    });
  }
}
