import {User} from './user.model';

export interface LoginResponse extends User {
  code?: string;
  error?: string;
}
