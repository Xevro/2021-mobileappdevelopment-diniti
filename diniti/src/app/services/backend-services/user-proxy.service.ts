import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {UpdateUser, User, Users} from '../../models/backend-models';
import {AuthenticationService} from '../authentication-services';
import {Role} from '../../models/authentication-models';

@Injectable({providedIn: 'root'})
export class UserProxyService extends CrudDataProvider<any> {
  api = environment.api;

  constructor(
    httpClient: HttpClient,
    private authenticationService: AuthenticationService) {
    super(httpClient);
  }

  getUserDataAction(objectId: string): Observable<User> {
    const url = `users/${objectId}`;
    return this.getRequest(url);
  }

  getAllCustomersAction(role: Role): Observable<Users> {
    const url = `users?where={"role":"${role}"}`;
    return this.getRequest(url);
  }

  getCustomerDataByUuidAction(customerUuid: string): Observable<Users> {
    const url = `users?where={"customerId":"${customerUuid}"}`;
    return this.getRequest(url);
  }

  postImageAction(imageData: any): Observable<any> {
    const url = `files/userProfilePicture.png`;
    const headerOptions = {
      'Content-Type': 'image/png',
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    return this.postRequest(url, imageData, headerOptions);
  }

  updateUserImageAction(imageData: any, objectId: string): Observable<any> {
    const url = 'users/' + objectId;
    const headerOptions = {
      'Content-Type': 'application/json',
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    return this.putRequest(url, imageData, headerOptions);
  }

  updateUserdataAction(body: UpdateUser, objectId: string): Observable<void> {
    const url = `users/${objectId}`;
    const headerOptions = {
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    return this.putRequest(url, body, headerOptions);
  }

  requestPasswordReset(email: string): Observable<void> {
    const url = `requestPasswordReset`;
    const headerOptions = {
      'Content-Type': 'application/json'
    };
    const body = {
      email
    };
    return this.postRequest(url, body, headerOptions);
  }
}
