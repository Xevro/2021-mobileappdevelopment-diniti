import {Methods} from '../core-models';

export interface StoredRequest {
  id: string;
  method: Methods;
  url: string;
  payload?: any;
  headerOptions?: any;
}
