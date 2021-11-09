import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication-services';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {OnlineStatusModule} from './components/online-status/online-status.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }), OnlineStatusModule],
  providers: [HttpClientModule, ImagePicker, {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }, AuthenticationService],
  bootstrap: [AppComponent],
})

/*
 {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
 */
export class AppModule {
}
