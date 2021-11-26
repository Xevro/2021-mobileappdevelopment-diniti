import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication-services';
import {Settings} from '../../models/backend-models';

@Injectable({providedIn: 'root'})
export class SettingsProxyService extends CrudDataProvider<any> {
  api = environment.api;

  constructor(
    httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    super(httpClient);
  }

  getSettingsAction(): Observable<Settings> {
    const headerOptions = {
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    const url = `classes/Settings`;
    return this.getRequest(url, headerOptions);
  }

  updateSettingsAction(visibility: boolean, objectId: string): Observable<any> {
    const url = `classes/Products`;
    const headerOptions = {
      'Content-Type': 'application/json'
    };
    const body = {
      visibility
    };
    return this.putRequest(url, body, headerOptions);
  }
}
