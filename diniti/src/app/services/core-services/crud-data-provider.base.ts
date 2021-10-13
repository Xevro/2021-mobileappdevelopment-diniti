import {HttpClient} from '@angular/common/http';
import {IdModel} from '../../models/core-models';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export abstract class CrudDataProvider<Type extends IdModel> {
  protected abstract api = environment.api;
  protected header = {
    'X-Parse-Application-Id': environment.applicationId,
    'X-Parse-REST-API-Key': environment.restApiKey,
    'X-Parse-Revocable-Session': '1'
  };

  constructor(protected httpClient: HttpClient) {
  }

  getRequest(url: string): Observable<Type> {
    return this.httpClient.get<Type>(`${this.getBaseUrl()}/${url}`, {
      headers: this.header
    });
  }

  protected getBaseUrl() {
    return this.api;
  }
}
