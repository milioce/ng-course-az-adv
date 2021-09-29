import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

const HEADER_AUTH = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('AuthInterceptor', req);

    const token = this.authService.getToken();

    if (token && req.method === 'GET')  {
      const clonedReq = req.clone({
        headers: req.headers.set(HEADER_AUTH, 'Bearer ' + token)
      });

      return next.handle(clonedReq);
    }

    return next.handle(req);
  }
}
