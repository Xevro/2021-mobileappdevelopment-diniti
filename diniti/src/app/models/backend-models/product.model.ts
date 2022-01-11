import {Image} from '../core-models';

export interface Product {
  objectId?: string;
  productId?: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: Image;
  visibility: boolean;
  amount?: number;
}
