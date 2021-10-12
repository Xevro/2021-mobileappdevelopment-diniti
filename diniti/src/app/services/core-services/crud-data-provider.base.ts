import {HttpClient} from '@angular/common/http';
import {IdModel} from '../../models/core-models';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class CrudDataProvider<Type extends IdModel> {
  protected abstract api: string;

  constructor(protected httpClient: HttpClient) {
  }

  getData(): Observable<Type> {
    const url = `${this.getBaseUrl()}/users`;
    return this.httpClient.get<Type>(url);
  }

  getList() {
    const url = `${this.getBaseUrl()}/list`;
    return this.httpClient.get(url);
  }

  protected getBaseUrl() {
    return this.api;
  }
}
