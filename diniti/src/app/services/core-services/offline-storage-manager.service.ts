import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {NetworkService} from './network-service.service';
import {StoredRequest} from '../../models/backend-models';
import {Methods} from '../../models/core-models';
import {CrudDataProvider} from './crud-data-provider.base';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SwUpdate} from '@angular/service-worker';

@Injectable({providedIn: 'root'})
export class OfflineStorageManager extends CrudDataProvider<any> {
  api = environment.api;

  private indexedDB: any;

  constructor(
    httpClient: HttpClient,
    private updates: SwUpdate,
    private networkService: NetworkService
  ) {
    super(httpClient);
    this.registerToEvents(networkService);
    this.createDatabase();
  }

  addRequestToStorage(request: StoredRequest) {
    if (!this.networkService.isOnline) {
      this.indexedDB.requests.add(request);
    }
  }

  private registerToEvents(onlineOfflineService: NetworkService) {
    onlineOfflineService.connectionChanged.subscribe(async online => {
      if (online) {
        await this.sendRequestsFromIndexedDb();
      }
    });
  }

  private createDatabase() {
    this.indexedDB = new Dexie('Diniti');
    this.indexedDB.version(1).stores({
      requests: 'id, method, url, payload, headerOptions'
    });
  }

  private async sendRequestsFromIndexedDb() {
    const allRequests: StoredRequest[] = await this.indexedDB.requests.toArray();
    if (allRequests) {
      await allRequests.forEach((storedRequest: StoredRequest) => {
        if (storedRequest.method === Methods.POST) {
          this.postRequest(storedRequest.url, storedRequest.payload, storedRequest.headerOptions ?? {})
            .subscribe(async () => await this.indexedDB.requests.delete(storedRequest.id));
        }
        if (storedRequest.method === Methods.PUT) {
          this.putRequest(storedRequest.url, storedRequest.payload, storedRequest.headerOptions ?? {})
            .subscribe(async () => await this.indexedDB.requests.delete(storedRequest.id));
        }
        if (storedRequest.method === Methods.DELETE) {
          this.deleteRequest(storedRequest.url, storedRequest.headerOptions ?? {})
            .subscribe(async () => await this.indexedDB.requests.delete(storedRequest.id));
        }
      });
      this.indexedDB.clear();
      this.updates.activateUpdate().then(() => document.location.reload());
    }
  }
}
