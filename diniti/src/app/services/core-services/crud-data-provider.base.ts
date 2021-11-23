import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export abstract class CrudDataProvider<Type> {
  protected abstract api = environment.api;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  protected header = {
    'X-Parse-Application-Id': environment.applicationId,
    'X-Parse-REST-API-Key': environment.restApiKey,
    'X-Parse-Revocable-Session': '1'
  };

  protected constructor(
    protected httpClient: HttpClient
  ) {
  }

  getRequest(url: string, headerOptions = {}): Observable<Type> {
    return this.httpClient.get<Type>(`${this.getBaseUrl()}/${url}`, {
      headers: Object.assign(this.header, headerOptions)
    });
  }

  postRequest(url: string, body: Type, headerOptions = {}): Observable<Type> {
    return this.httpClient.post<Type>(`${this.getBaseUrl()}/${url}`, body, {
      headers: Object.assign(this.header, headerOptions)
    });
  }

  putRequest(url: string, body: Type, headerOptions = {}): Observable<void> {
    return this.httpClient.put<void>(`${this.getBaseUrl()}/${url}`, body, {
      headers: Object.assign(this.header, headerOptions)
    });
  }

  deleteRequest(url: string, headerOptions = {}): Observable<void> {
    return this.httpClient.delete<void>(`${this.getBaseUrl()}/${url}`, {
      headers: Object.assign(this.header, headerOptions)
    });
  }

  protected getBaseUrl() {
    return this.api;
  }
}
