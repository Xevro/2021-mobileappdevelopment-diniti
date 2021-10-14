import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserContextService } from './services/ui-services';
import { Routes } from './models';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
    constructor(private userContext: UserContextService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.userContext.isAuthenticated()) {
          return true;
        } else {
            return this.userContext.tryAutoLogin().pipe(
                tap((loginSuccess) => {
                    if (!loginSuccess) {
                        this.router.navigate(Routes.login);
                    } else {
                      return true;
                    }
                })
            );
        }
    }
}
