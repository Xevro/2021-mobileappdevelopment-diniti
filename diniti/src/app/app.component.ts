import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;

  subscriptions: Subscription[] = [];

  connectionStatusMessage: string;
  connectionStatus: string;

  constructor() {
  }

  ngOnInit() {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Back to online';
      this.connectionStatus = 'online';
      console.log('Online...');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
      this.connectionStatus = 'offline';
      console.log('Offline...');
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
