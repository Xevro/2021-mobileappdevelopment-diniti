import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication-services';
import {Orders} from '../../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class OrdersProxyService extends CrudDataProvider<any> {
  api = environment.api;

  constructor(
    httpClient: HttpClient,
    private authenticationService: AuthenticationService) {
    super(httpClient);
  }

  getOrdersAction(objectId: string): Observable<Orders> {
    const headerOptions = {
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    const url = `classes/Orders?where={"userId":{"__type":"Pointer","className":"_User","objectId":"${objectId}"}}`;
    return this.getRequest(url, headerOptions);
  }
}
