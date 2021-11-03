import {Image} from '../core-models';

export interface Product {
  objectId?: string;
  productId?: string;
  name: string;
  price: number;
  description?: string;
  image?: Image;
  visibility: boolean;
  amount?: number;
}
