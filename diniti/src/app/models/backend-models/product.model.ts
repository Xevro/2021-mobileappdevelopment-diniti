import {Image} from '../core-models';

export interface Product {
  objectId: string;
  name: string;
  price: number;
  image: Image;
  visibility: boolean;
  amount: number;
}
