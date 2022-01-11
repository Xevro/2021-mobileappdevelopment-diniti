import {Image} from '../core-models';
import {ProductCategories} from './enum/product-categories.enum';

export interface UpdateProduct {
  name: string;
  price: number;
  category: ProductCategories;
  description: string;
  visibility: boolean;
  image?: Image;
}
