import {Injectable} from '@angular/core';
import {fromEvent} from 'rxjs';
import {Network} from '@ionic-native/network/ngx';
import {ToastMessageService} from '../ui-services';
import {Platform} from '@ionic/angular';
import {NetworkStatus} from '../../models/core-models';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  appIsOnline: boolean;
  appIsOnDevice: boolean;

  constructor(
    private network: Network,
    private platform: Platform,
    private toastMessageService: ToastMessageService
  ) {
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
        console.log('network disconnected');
        this.appIsOnline = false;
      });
      this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        this.appIsOnline = true;
        if (this.network.type === 'wifi') {
          console.log('we have a wifi connection!');
        }
      });
      console.log('device network monitor is ON');
    } else {
      localStorage.setItem('connectionStatus', NetworkStatus.Online);
      fromEvent(window, 'offline').subscribe(() => {
          this.appIsOnline = false;
          localStorage.setItem('connectionStatus', NetworkStatus.Offline);
          this.toastMessageService.presentToast('U bent offline.');
        }
      );
      fromEvent(window, 'online').subscribe(() => {
          this.appIsOnline = true;
          localStorage.setItem('connectionStatus', NetworkStatus.Online);
          this.toastMessageService.presentToast('U bent terug online');
        }
      );
      console.log('PWA network monitor started');
    }
  }

  getNetworkStatus(): boolean {
    if (localStorage.getItem('connectionStatus') === NetworkStatus.Offline) {
      return false;
    }
    return localStorage.getItem('connectionStatus') === NetworkStatus.Online;
  }
}
