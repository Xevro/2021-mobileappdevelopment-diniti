import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../services/ui-services';
import {Routes} from '../models';
import {catchError, map, tap} from 'rxjs/operators';
import {Role} from '../models/backend-models';
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
    console.log('login guard');
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
