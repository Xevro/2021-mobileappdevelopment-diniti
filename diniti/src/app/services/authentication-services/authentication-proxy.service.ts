import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoginResponse, RegisterInfo, RegisterResponse} from '../../models/authentication-models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationProxyService extends CrudDataProvider<any> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  loginAction(username: string, password: string): Observable<LoginResponse> {
    const url = 'login';
    const headerOptions = {
      'Content-Type': 'application/json'
    };
    const body = {
      username,
      password
    };
    return this.postRequest(url, body, headerOptions);
  }

  registerAction(registerData: RegisterInfo): Observable<RegisterResponse> {
    const url = 'users';
    const headerOptions = {
      'Content-Type': 'application/json'
    };
    return this.postRequest(url, registerData, headerOptions);
  }

  public refreshLogin(sessionToken: string): Observable<LoginResponse> {
    const url = 'users/me';
    const headerOptions = {
      'X-Parse-Session-Token': sessionToken
    };
    return this.getRequest(url, headerOptions);
  }

  public logOutAction(sessionToken: string): Observable<LoginResponse> {
    const url = 'logout';
    const headerOptions = {
      'X-Parse-Session-Token': sessionToken
    };
    return this.postRequest(url, headerOptions);
  }
}
