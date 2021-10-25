import {Injectable} from '@angular/core';
import {Product} from '../../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class ProductsSummaryService {
  products: Product[];
  storageName = 'products';

  constructor() {
  }

  setProductsData(products: Product[]) {
   localStorage.setItem(this.storageName, JSON.stringify(products));
  }

  getProductsData(): Product[] {
    const data = localStorage.getItem(this.storageName);
    return JSON.parse(data);
  }

  removeProductsData() {
    return localStorage.removeItem(this.storageName);
  }
}
