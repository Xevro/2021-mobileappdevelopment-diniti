import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Observable, of} from 'rxjs';
import {LoginInfo, User} from '../../models/backend-models';
import {PublicProxyService} from './public-proxy.service';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  cookieKey = 'diniti';
  cookiePath = '/';
  authenticated = false;
  landingPage: string = null;
  sessionToken: string = null;

  constructor(
    private cookieService: CookieService,
    private publicProxyService: PublicProxyService
  ) {
  }

  public isAuthenticated() {
    return this.authenticated;
  }

  public userLoggedIn(loginInfo: LoginInfo) {
    this.authenticated = true;
    this.sessionToken = loginInfo.sessionToken;
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 7);
    this.cookieService.set(this.cookieKey, loginInfo.sessionToken, expireDate, this.cookiePath);
  }

  public clear(): void {
    this.authenticated = false;
    this.landingPage = null;
    this.sessionToken = null;
    this.cookieService.delete(this.cookieKey, this.cookiePath);
  }

  tryAutoLogin(): Observable<boolean> {
    if (this.cookieService.check(this.cookieKey)) {
      this.sessionToken = this.cookieService.get(this.cookieKey);
      return this.publicProxyService
        .refreshLogin(this.sessionToken)
        .pipe(
          tap((loginInfo) => {
            this.userLoggedIn(loginInfo);
          }),
          map(() => true),
          catchError(() => {
            console.error('Cookie login failed, clearing cookie');
            this.cookieService.delete(this.cookieKey, this.cookiePath);
            this.sessionToken = null;
            return of(false);
          })
        );
    }
    return of(false);
  }
}
