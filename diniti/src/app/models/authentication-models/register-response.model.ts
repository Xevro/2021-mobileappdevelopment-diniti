import {Role} from './enum/role.enum';

export interface RegisterResponse {
  createdAt: string;
  objectId: string;
  role: Role;
  sessionToken: string;
}
