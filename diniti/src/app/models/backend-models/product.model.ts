import {Image} from '../core-models';

export interface Product {
  name: string;
  price: number;
  image: Image;
  visibility: boolean;
  amount: number;
}
