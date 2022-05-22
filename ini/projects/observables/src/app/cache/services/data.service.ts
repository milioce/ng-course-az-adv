import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataService {
  cache: any = null;

  constructor(private http: HttpClient) { }


  getCountries() {
    return this.getRequest();
  }

  getCacheResponse() {
    if (this.cache) {
      return of(this.cache);
    }

    return this.getRequest().pipe(
      tap(data => this.cache = data)
    );
  }

  /**
   * Cada vez que te suscribes se crea un nuevo productor.
   */
  getRequest() {
    return this.http.get('/api/countries');
  }

}
