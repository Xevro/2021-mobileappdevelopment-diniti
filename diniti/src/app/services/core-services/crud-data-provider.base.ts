import {HttpClient} from '@angular/common/http';
import {IdModel} from '../../models/core-models';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export abstract class CrudDataProvider<Type extends IdModel> {
  protected abstract api = environment.api;
  protected header = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'X-Parse-Application-Id': environment.applicationId,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'X-Parse-REST-API-Key': environment.restApiKey,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'X-Parse-Revocable-Session': '1'
  };

  constructor(protected httpClient: HttpClient) {
  }

  getRequest(url: string): Observable<Type> {
    return this.httpClient.get<Type>(url, {
      headers: this.header
    });
  }

  protected getBaseUrl() {
    return this.api;
  }
}
