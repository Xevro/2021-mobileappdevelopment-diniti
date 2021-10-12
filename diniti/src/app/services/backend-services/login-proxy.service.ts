import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Login} from '../../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class LoginProxyService extends CrudDataProvider<Login> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
