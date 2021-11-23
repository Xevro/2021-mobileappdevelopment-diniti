import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {UuidGenerator} from './uuid-generator.service';
import {NetworkService} from './network-service.service';
import {StoredRequest} from '../../models/backend-models';
import {Methods} from '../../models/core-models';
import {CrudDataProvider} from './crud-data-provider.base';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OfflineStorageManager extends CrudDataProvider<any> {
  api = environment.api;

  private indexedDB: any;

  constructor(
    httpClient: HttpClient,
    private uuidGenerator: UuidGenerator,
    private networkService: NetworkService
  ) {
    super(httpClient);
    this.registerToEvents(networkService);
    this.createDatabase();
  }

  addRequestToStorage(request: StoredRequest) {
    request.id = this.uuidGenerator.generateUUID();
    request.done = false;
    if (!this.networkService.isOnline) {
      this.addToIndexedDb(request);
    }
  }

  private registerToEvents(onlineOfflineService: NetworkService) {
    onlineOfflineService.connectionChanged.subscribe(online => {
      if (online) {
        console.log('went back online');
        console.log('sending all stored items');
        this.sendRequestsFromIndexedDb();
      } else {
        console.log('went offline, storing in indexdb');
      }
    });
  }

  private createDatabase() {
    this.indexedDB = new Dexie('Diniti');
    this.indexedDB.version(1).stores({
      requests: 'id,method,url,payload,headerOptions,done'
    });
  }

  private addToIndexedDb(request: StoredRequest) {
    this.indexedDB.requests.add(request).then(async () => {
      const allItems: StoredRequest[] = await this.indexedDB.requests.toArray();
      console.log('saved in DB, DB is now', allItems);
    }).catch(e => {
      console.log('Error: ' + (e.stack || e));
    });
  }

  private async sendRequestsFromIndexedDb() {
    const allRequests: StoredRequest[] = await this.indexedDB.requests.toArray();
    await allRequests.forEach((storedRequest: StoredRequest) => {
        if (storedRequest.method === Methods.POST) {
          const response = this.postRequest(storedRequest.url, storedRequest.payload, storedRequest.headerOptions ?? {});
          response.subscribe(() => storedRequest.done = true);
        }
        if (storedRequest.method === Methods.PUT) {
          const response = this.putRequest(storedRequest.url, storedRequest.payload, storedRequest.headerOptions ?? {});
          response.subscribe(() => storedRequest.done = true);
        }
        if (storedRequest.method === Methods.DELETE) {
          const response = this.deleteRequest(storedRequest.url, storedRequest.headerOptions ?? {});
          response.subscribe(() => storedRequest.done = true);
        }
        this.indexedDB.requests.delete(storedRequest.id).then(() => {
          console.log(`item ${storedRequest.id} sent and deleted locally`);
        });
      }
    );
  }
}
