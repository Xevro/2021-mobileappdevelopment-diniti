import {Time} from '../core-models';

export interface StoreSettings {
  closingHour: Time;
  startHour: Time;
  createdAt?: string;
  objectId: string;
  status: boolean;
  updatedAt?: string;
}
