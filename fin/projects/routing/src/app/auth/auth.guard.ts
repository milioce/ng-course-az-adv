import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route): Observable<any> {
    return this.authService.checkPermissions().pipe(
      map(check => check || this.redirect())
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn()
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn()
  }

  private redirect() {
    return this.router.createUrlTree(['/']);
  }

}
