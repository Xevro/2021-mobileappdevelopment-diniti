import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoginInfo} from '../../models/backend-models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginProxyService extends CrudDataProvider<LoginInfo> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  loginAction(email: string, password: string): Observable<LoginInfo> {
    const url = `login?email=${encodeURI(email)}&password=${encodeURI(password)}`;
    return this.getRequest(url);
  }
}
