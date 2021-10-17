import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoginInfo, RegisterInfo, RegisterResponse} from '../../models/backend-models';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationProxyService extends CrudDataProvider<any> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  loginAction(username: string, password: string): Observable<LoginResponse> {
    const url = `login?username=${encodeURI(username)}&password=${encodeURI(password)}`;
    return this.getRequest(url);
  }

  registerAction(registerData: RegisterInfo): Observable<RegisterResponse> {
    const url = 'users';
    const headerOptions =  {
      'Content-Type': 'application/json'
    };
    return this.postRequest(url, registerData, headerOptions);
  }

  public refreshLogin(sessionToken): Observable<LoginResponse> {
    const url = '/users/me';
    const headerOptions =  {
      'X-Parse-Session-Token': sessionToken
    };
    return this.getRequest(url, headerOptions);
  }
}
