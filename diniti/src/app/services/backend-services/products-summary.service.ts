import {Injectable} from '@angular/core';
import {Product} from '../../models/backend-models';
import {SaveLocalService} from '../core-services';

@Injectable({providedIn: 'root'})
export class ProductsSummaryService extends SaveLocalService<Product[]> {
  storageName = 'products';

  constructor() {
    super();
  }

  setProductsData(products: Product[]) {
    this.saveToStorage(products);
  }

  getProductsData(): Product[] {
    return this.getStoredData();
  }

  removeProductsData() {
    return this.removeStoredData();
  }
}
