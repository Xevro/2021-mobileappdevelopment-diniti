import {User} from '../backend-models';
import {Role} from './role.enum';

export interface LoginInfo extends User {
  id: string;
  sessionToken: string;
  role: Role;
}
