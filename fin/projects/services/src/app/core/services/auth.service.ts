import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  private token = '1234-1234';

  constructor() { }

  getToken(): string {
    return this.token;
  }
}
