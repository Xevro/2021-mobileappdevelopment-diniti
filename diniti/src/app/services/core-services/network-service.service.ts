import {Injectable} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {Network} from '@ionic-native/network/ngx';
import {ToastMessageService} from '../ui-services';
import {Platform} from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class NetworkService {
  appIsOnline: boolean;
  appIsOnDevice: boolean;

  private internalConnectionChanged = new Subject<boolean>();

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline() {
    return !!window.navigator.onLine;
  }

  constructor(
    private network: Network,
    private platform: Platform,
    private toastMessageService: ToastMessageService
  ) {
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
    this.platform.ready().then(() => {
      this.initNetworkMonitor();
    });
  }

  initNetworkMonitor() {
    if ('onLine' in navigator) {
      this.appIsOnline = navigator.onLine;
    }
    // check if we are on device or if its a browser:
    if (this.appIsOnDevice) {
      this.network.onDisconnect().subscribe(() => {
        this.appIsOnline = false;
      });
      this.network.onConnect().subscribe(() => {
        this.appIsOnline = true;
        if (this.network.type === 'wifi') {
          console.log('we found a wifi connection!');
        }
      });
    } else {
      fromEvent(window, 'offline').subscribe(() => {
          this.appIsOnline = false;
          this.toastMessageService.presentToast('U bent offline.');
        }
      );
      fromEvent(window, 'online').subscribe(() => {
          this.appIsOnline = true;
          this.toastMessageService.presentToast('U bent terug online');
        }
      );
    }
  }

  private updateOnlineStatus() {
    this.internalConnectionChanged.next(window.navigator.onLine);
  }
}
