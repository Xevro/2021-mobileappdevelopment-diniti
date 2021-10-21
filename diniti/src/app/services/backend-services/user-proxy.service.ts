import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class UserProxyService extends CrudDataProvider<any> {
  api = environment.api;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getUserDataAction(objectId: string): Observable<User> {
    const url = `users/${objectId}`;
    const headerOptions = {
      'X-Parse-Master-Key': true
    };
    return this.getRequest(url, headerOptions);
  }
}
