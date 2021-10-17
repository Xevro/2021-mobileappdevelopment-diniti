import {Role} from './role.enum';

export interface RegisterResponse {
  createdAt: string;
  objectId: string;
  role: Role;
  sessionToken: string;
}
