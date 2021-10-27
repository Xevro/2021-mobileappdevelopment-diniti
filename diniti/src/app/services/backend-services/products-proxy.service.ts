import {Injectable} from '@angular/core';
import {CrudDataProvider} from '../core-services';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication-services';
import {Products} from '../../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class ProductsProxyService extends CrudDataProvider<Products> {
  api = environment.api;

  constructor(
    httpClient: HttpClient,
    private authenticationService: AuthenticationService) {
    super(httpClient);
  }

  getProductsAction(visibility: boolean): Observable<Products> {
    const headerOptions = {
      'X-Parse-Session-Token': this.authenticationService.getSessionToken()
    };
    const url = `classes/Products?where={"visibility":${visibility}}`;
    return this.getRequest(url, headerOptions);
  }
}
