import {Time} from '../core-models';
import {OrderStatus} from './order-status.enum';
import {Product} from './product.model';

export interface Order {
  objectId: string;
  pickUpTime: Time;
  products: Product[];
  orderId: string;
  status: OrderStatus;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
