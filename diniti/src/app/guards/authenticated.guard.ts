import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../services/ui-services';
import {Routes} from '../models';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('guard');
    return this.authenticationService.tryAutoLogin().pipe(
      tap((status) => {
        if (!status || next.data.expectedRole !== this.authenticationService.getRole()) {
          this.router.navigate(Routes.login);
        } else {
          return true;
        }
      })
    );
  }
}
