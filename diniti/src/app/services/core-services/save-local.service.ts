import {Injectable} from '@angular/core';

@Injectable()
export abstract class SaveLocalService<Type> {
  protected abstract storageName: string;

  constructor() {
  }

  saveToStorage(data: Type) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getStoredData() {
    const data = localStorage.getItem(this.storageName);
    return JSON.parse(data);
  }

  removeStoredData() {
    localStorage.removeItem(this.storageName);
  }
}
