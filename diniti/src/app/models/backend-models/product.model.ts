import {Image} from '../core-models';
import {ProductCategories} from './enum/product-categories.enum';

export interface Product {
  objectId?: string;
  productId?: string;
  name: string;
  price: number;
  category: ProductCategories;
  description?: string;
  image?: Image;
  visibility: boolean;
  amount?: number;
}
