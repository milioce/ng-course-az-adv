import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('ErrorInterceptor', req);

    return next.handle(req).pipe(
      tap(
        () => {},
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.status === 404) {
            this.router.navigateByUrl('/error');
          }
        }
      ),
    );

  }
}
