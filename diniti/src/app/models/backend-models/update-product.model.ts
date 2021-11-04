import {Image} from '../core-models';

export interface UpdateProduct {
  name: string;
  price: number;
  description: string;
  visibility: boolean;
  image?: Image;
}
