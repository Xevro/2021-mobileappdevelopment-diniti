import {Time} from '../core-models';
import {OrderStatus} from './enum/order-status.enum';
import {Product} from './product.model';
import {UserPointer} from './user-pointer.model';

export interface Order {
  objectId: string;
  orderId: number;
  orderUuid: string;
  userId: UserPointer;
  username: string;
  pickUpTime: Time;
  products: Product[];
  status: OrderStatus;
  optionalNotice?: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
