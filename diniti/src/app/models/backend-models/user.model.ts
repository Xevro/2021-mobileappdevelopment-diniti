import {Role} from '../authentication-models';

export interface User {
  createdAt?: string;
  updatedAt?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  userEmail?: string;
  sessionToken?: string;
  role?: Role;
  objectId?: string;
}
