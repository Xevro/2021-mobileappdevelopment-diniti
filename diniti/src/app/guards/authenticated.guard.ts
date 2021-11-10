import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication-services';
import {Routes} from '../models/core-models';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
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
  }
}
