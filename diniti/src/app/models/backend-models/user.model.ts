import {Role} from './role.enum';

export interface User {
  createdAt?: string;
  updatedAt?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  sessionToken?: string;
  role?: Role;
  objectId?: string;
}
