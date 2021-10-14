import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Credentials, LoginInfo} from '../../models/backend-models';
import {CrudDataProvider} from '../core-services';

@Injectable({
  providedIn: 'root'
})
export class PublicProxyService extends CrudDataProvider<LoginInfo> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public login(credentials: Credentials): Observable<LoginInfo> {
    const url = `${environment.api}/public/logins`;
    return this.httpClient.post<LoginInfo>(url, credentials);
  }

  public refreshLogin(sessionToken): Observable<LoginInfo> {
    const url = '/users/me';
    const headerOptions =  {
      'X-Parse-Session-Token': sessionToken
    };
    return this.getRequest(url, headerOptions);
  }
}
