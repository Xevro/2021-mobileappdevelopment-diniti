import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication-services';
import {Routes} from '../models/core-models';
import {catchError, map} from 'rxjs/operators';
import {Role} from '../models/authentication-models';
import {Observable, of} from 'rxjs';
import {NetworkService} from '../services/core-services';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private networkService: NetworkService,
    private authenticationService: AuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.networkService.isOnline) {
      return this.authenticationService.tryAutoLogin().pipe(map(status => {
          if (!status) {
            return true;
          } else {
            if (this.authenticationService.getRole() === Role.user) {
              this.router.navigate(Routes.userOverview);
            } else if (this.authenticationService.getRole() === Role.admin) {
              this.router.navigate(Routes.adminOverview);
            } else {
              this.router.navigate(Routes.onboarding);
            }
          }
        }),
        catchError((err) => {
          this.router.navigate(Routes.login);
          return of(false);
        })
      );
    } else {
      return of(true);
    }
  }
}
