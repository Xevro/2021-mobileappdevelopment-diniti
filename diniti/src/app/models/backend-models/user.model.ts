import {Role} from '../authentication-models';
import {ProfilePicture} from './profile-picture.model';

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
  profilePicture: ProfilePicture;
}
