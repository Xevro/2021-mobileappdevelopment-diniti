import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, first, shareReplay} from 'rxjs/operators';
import {AuthenticationService} from '../authentication-services';

@Injectable()
export class InterceptService implements HttpInterceptor {
  public readonly store: Record<string, Observable<HttpEvent<any>>> = {};

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get('X-skip-request')) {
      request = request.clone({
        headers: request.headers.delete('X-skip-request')
      });
      return next.handle(request);
    }
    if (request.method !== 'GET') {
      return next.handle(request);
    } else {
      const cachedObservable = this.store[request.urlWithParams] ||
        (this.store[request.urlWithParams] = next.handle(request).pipe(
          filter((res) => res instanceof HttpResponse),
          shareReplay(1),
        ));
      return cachedObservable.pipe(first());
    }
  }
}
