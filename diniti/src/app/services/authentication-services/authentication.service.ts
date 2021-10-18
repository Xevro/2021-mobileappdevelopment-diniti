import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Observable, of} from 'rxjs';
import {LoginResponse, RegisterResponse, Role} from '../../models/authentication-models';
import {catchError, map, tap} from 'rxjs/operators';
import {AuthenticationProxyService} from './index';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  cookieKey = 'diniti';
  cookiePath = '/';
  authenticated = false;
  sessionToken: string = null;
  role: Role = null;
  objectId: string;

  constructor(
    private cookieService: CookieService,
    private authenticationProxyService: AuthenticationProxyService
  ) {
  }

  public isAuthenticated() {
    return this.authenticated;
  }

  public getRole() {
    return this.role;
  }

  public getSessionToken() {
    if (this.cookieService.check(this.cookieKey)) {
      return this.cookieService.get(this.cookieKey);
    }
  }

  public getObjectId() {
    return this.objectId;
  }

  public userLoggedIn(loginResponse: LoginResponse) {
    this.authenticated = true;
    this.role = loginResponse.role;
    this.objectId = loginResponse.objectId;
    this.sessionToken = loginResponse.sessionToken;
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 7);
    this.cookieService.set(this.cookieKey, loginResponse.sessionToken, expireDate, this.cookiePath);
    return true;
  }

  public userRegistered(registerResponse: RegisterResponse) {
    this.authenticated = true;
    this.role = Role.user;
    this.objectId = registerResponse.objectId;
    this.sessionToken = registerResponse.sessionToken;
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 7);
    this.cookieService.set(this.cookieKey, registerResponse.sessionToken, expireDate, this.cookiePath);
    return true;
  }

  public logOut(): void {
    this.authenticated = false;
    this.sessionToken = null;
    this.role = null;
    this.cookieService.delete(this.cookieKey, this.cookiePath);
  }

  tryAutoLogin(): Observable<boolean> {
    if (this.cookieService.check(this.cookieKey)) {
      this.sessionToken = this.cookieService.get(this.cookieKey);
      return this.authenticationProxyService
        .refreshLogin(this.sessionToken)
        .pipe(
          tap((loginInfo) => {
            this.userLoggedIn(loginInfo);
            return of(true);
          }),
          map(() => true),
          catchError(() => {
            console.error('Cookie login failed, clearing cookie');
            this.logOut();
            return of(false);
          })
        );
    }
    return of(false);
  }
}
