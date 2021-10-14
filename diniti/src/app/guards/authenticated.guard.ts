import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../services/ui-services';
import {Routes} from '../models';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private userContext: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('guard');
    return this.userContext.tryAutoLogin().pipe(
      tap((status) => {
        if (!status || next.data.expectedRole !== this.userContext.getRole()) {
          this.router.navigate(Routes.login);
        } else {
          return true;
        }
      })
    );
  }
}
