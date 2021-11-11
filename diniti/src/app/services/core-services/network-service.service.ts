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
    private toastMessageService: ToastMessageService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.initNetworkMonitor();
    });
  }

  initNetworkMonitor() {
    console.log('init network monitoring...');
    if ('onLine' in navigator) {
      this.appIsOnline = navigator.onLine;
    }
    // check if we are on device or if its a browser:
    if (this.appIsOnDevice) {
      // watch network for a disconnect
      this.network.onDisconnect().subscribe(() => {
        console.log('network disconnected:(');
        this.appIsOnline = false;
      });
      // watch network for a connection
      this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        this.appIsOnline = true;
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      });
      console.log('device network monitor is ON');
    } else {
      localStorage.setItem('connectionStatus', NetworkStatus.Online);
      fromEvent(window, 'offline').subscribe(() => {
          this.appIsOnline = false;
          localStorage.setItem('connectionStatus', NetworkStatus.Offline);
          this.toastMessageService.presentToast('U bent offline.');
          console.log('network disconnected:(');
        }
      );
      fromEvent(window, 'online').subscribe(() => {
          this.appIsOnline = true;
          localStorage.setItem('connectionStatus', NetworkStatus.Online);
          this.toastMessageService.presentToast('U bent terug online');
          console.log('network connected!');
        }
      );
      console.log('PWA network monitor is ON');
    }
  }

  getNetworkStatus(): boolean {
    if (localStorage.getItem('connectionStatus') === NetworkStatus.Offline) {
      return false;
    }
    if (localStorage.getItem('connectionStatus') === NetworkStatus.Online) {
      return true;
    }
    return false;
  }
}
