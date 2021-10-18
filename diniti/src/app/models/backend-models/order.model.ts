import {Time} from '../core-models';
import {OrderStatus} from './order-status.enum';

export interface Order {
  objectId: string;
  pickUpTime: Time;
  products: [];
  orderId: string;
  status: OrderStatus;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
