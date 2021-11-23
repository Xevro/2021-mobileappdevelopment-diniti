import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication-services';
import {Routes} from '../models/core-models';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {NetworkService} from '../services/core-services';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private networkService: NetworkService,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.networkService.isOnline) {
      return this.authenticationService.tryAutoLogin().pipe(
        tap((status) => {
          if (!status || next.data.expectedRole !== this.authenticationService.getRole()) {
            this.router.navigate(Routes.login);
          } else {
            return of(false);
          }
        }),
        catchError((err) => of(false))
      );
    } else {
      return of(true);
    }
  }
}
