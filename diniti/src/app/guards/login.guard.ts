import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication-services';
import {Routes} from '../models/core-models';
import {catchError, map} from 'rxjs/operators';
import {Role} from '../models/authentication-models';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authenticationService.tryAutoLogin().pipe(
      map(status => {
        if (!status) {
          return true;
        } else {
          if (this.authenticationService.getRole() === Role.user) {
            this.router.navigate(Routes.userOverview);
          } else if (this.authenticationService.getRole() === Role.admin) {
            // Fix: change to admin page
            this.router.navigate(Routes.userProfile);
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
  }
}
