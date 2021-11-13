import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Routes} from '../models/core-models';

@Injectable({
  providedIn: 'root'
})
export class OrderCompleteGuard implements CanActivateChild {
  constructor(
    private router: Router
  ) {
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (localStorage.getItem('orderComplete') === '1') {
      return of(true);
    } else {
      this.router.navigate(Routes.onboarding);
    }
  }
}
