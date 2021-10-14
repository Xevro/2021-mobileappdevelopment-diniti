import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../services/ui-services';
import {Routes} from '../models';
import {tap} from 'rxjs/operators';
import {Role} from '../models/backend-models';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userContext: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('login guard');
    return this.userContext.tryAutoLogin().pipe(
      tap((status) => {
        if (!status) {
          return true;
        } else {
          if (this.userContext.getRole() === Role.user) {
            this.router.navigate(Routes.userOverview);
          } else if (this.userContext.getRole() === Role.admin) {
            // Fix: change to admin page
            this.router.navigate(Routes.userProfile);
          }
        }
      })
    );
  }
}
