import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication-services';
import {Order, Orders, OrderStatus} from '../../models/backend-models';

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

  getAllOrdersAction(): Observable<Orders> {
    const headerOptions = {
      'X-Parse-Session-Token': this.authenticationService.getSessionToken(),
      'X-skip-request': 'true'
    };
    const url = `classes/Orders`;
    return this.getRequest(url, headerOptions);
  }

  getOrdersAction(userId: string): Observable<Orders> {
    const headerOptions = {
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    const url = `classes/Orders?where={"userId":{"__type":"Pointer","className":"_User","objectId":"${userId}"}}`;
    return this.getRequest(url, headerOptions);
  }

  getOrderByIdAction(orderId: string): Observable<Orders> {
    const headerOptions = {
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    const url = `classes/Orders?where={"orderUuid":"${orderId}"}`;
    return this.getRequest(url, headerOptions);
  }

  postOrderAction(order: Order): Observable<any> {
    const url = `classes/Orders`;
    return this.postRequest(url, order);
  }

  updateOrderAction(status: OrderStatus, objectId: string): Observable<any> {
    const url = `classes/Orders/${objectId}`;
    const headerOptions = {
      'Content-Type': 'application/json'
    };
    const body = {
      status
    };
    return this.putRequest(url, body, headerOptions);
  }
}
