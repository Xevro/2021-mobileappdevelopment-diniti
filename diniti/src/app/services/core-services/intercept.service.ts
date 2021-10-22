import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, filter, first, shareReplay} from 'rxjs/operators';
import {AuthenticationService} from '../authentication-services';

@Injectable()
export class InterceptService implements HttpInterceptor {
  public readonly store: Record<string, Observable<HttpEvent<any>>> = {};

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get('X-skip-request')) {
      request = request.clone({
        headers: request.headers.delete('X-skip-request')
      });
      return this.handleRequest(request, next);
    }
    if (request.method !== 'GET') {
      return this.handleRequest(request, next);
    } else {
      const cachedObservable = this.store[request.urlWithParams] ||
        (this.store[request.urlWithParams] = next.handle(request).pipe(
          filter((res) => res instanceof HttpResponse),
          shareReplay(1),
        ));
      return cachedObservable.pipe(first());
    }
  }

  private handleRequest(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logOut();
        location.reload(true);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
