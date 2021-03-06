import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidGenerator {

  generateUUID() {
    let dt = new Date().getTime();
    return 'xxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, (c) => {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return ((c === 'x') ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  generateIntegers(length: number) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
  }
}
