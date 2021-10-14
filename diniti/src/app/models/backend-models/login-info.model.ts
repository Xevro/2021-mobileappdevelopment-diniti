import {User} from './user.model';

export interface LoginInfo extends User {
  id: string;
  isSuccess: boolean;
  sessionToken: string;
}
