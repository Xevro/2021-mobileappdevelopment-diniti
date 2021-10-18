import {User} from '../backend-models/user.model';
import {Role} from './role.enum';

export interface LoginInfo extends User {
  id: string;
  sessionToken: string;
  role: Role;
}
