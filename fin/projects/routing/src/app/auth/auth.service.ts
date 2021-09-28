import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  user = { isAdmin: true };

  checkPermissions(): Observable<boolean> {
    return of(this.user.isAdmin);
  }

  isLoggedIn() {
    return of(true);
  }

  constructor() { }
}
