import {User} from '../backend-models';

export interface LoginResponse extends User {
  code?: string;
  error?: string;
}
