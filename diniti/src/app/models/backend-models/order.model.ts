import {Time} from '../core-models';
import {OrderStatus} from './order-status.enum';
import {Product} from './product.model';
import {UserPointer} from './user-pointer.model';

export interface Order {
  objectId: string;
  orderId: number;
  userId: UserPointer;
  pickUpTime: Time;
  products: Product[];
  status: OrderStatus;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
