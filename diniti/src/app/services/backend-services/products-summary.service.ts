import {Injectable} from '@angular/core';
import {Product} from '../../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class ProductsSummaryService {
  products: Product[];

  constructor() {
  }

  setProductsData(products: Product[]) {
    return (this.products = products);
  }

  getProductsData(): Product[] {
    return this.products;
  }
}
