import {User} from './user.model';
import {Role} from './role.enum';

export interface LoginInfo extends User {
  id: string;
  isSuccess: boolean;
  sessionToken: string;
  role: Role;
}
