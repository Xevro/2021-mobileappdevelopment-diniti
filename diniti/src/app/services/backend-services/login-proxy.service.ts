import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Login} from '../../models/backend-models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginProxyService extends CrudDataProvider<Login> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  loginAction(username: string, password: string): Observable<Login> {
    const url = `${this.getBaseUrl()}/login?username=${encodeURI(username)}&password=${encodeURI(password)}`;
    return this.getRequest(url);
  }
}
