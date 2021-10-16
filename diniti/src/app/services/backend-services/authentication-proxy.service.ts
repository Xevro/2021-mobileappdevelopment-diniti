import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoginInfo, RegisterInfo, RegisterResponse} from '../../models/backend-models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationProxyService extends CrudDataProvider<any> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  loginAction(email: string, password: string): Observable<LoginInfo> {
    const url = `login?email=${encodeURI(email)}&password=${encodeURI(password)}`;
    return this.getRequest(url);
  }

  registerAction(registerData: RegisterInfo): Observable<RegisterResponse> { // change loginInfo
    const url = '/users';
    const headerOptions =  {
      'Content-Type': 'application/json'
    };
    return this.postRequest(url, registerData, headerOptions);
  }

  public refreshLogin(sessionToken): Observable<LoginInfo> {
    const url = '/users/me';
    const headerOptions =  {
      'X-Parse-Session-Token': sessionToken
    };
    return this.getRequest(url, headerOptions);
  }
}
