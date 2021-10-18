import {User} from '../backend-models/user.model';

export interface LoginResponse extends User {
  code?: string;
  error?: string;
}
