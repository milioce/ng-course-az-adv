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
   * Cacheamos el observable.
   */
  getCountries1() {
    if (!this.cache) {
      this.cache = this.getRequest();
    }

    return this.cache;
  }

  getCountries2() {
    if (!this.cache) {
      this.cache = this.getRequest().pipe(
        shareReplay(1)
      );
    }

    return this.cache;
  }

  getCountries3() {
    if (!this.cache) {
      const clean$ = timer(10000).pipe(
        tap(_ => this.cache = null)
      );

      this.cache = this.getRequest().pipe(
        tap(_ => clean$.subscribe()),
        shareReplay(1),
      );
    }

    return this.cache;
  }

  /**
   * Cada vez que te suscribes se crea un nuevo productor.
   */
  getRequest() {
    return this.http.get('/api/countries');
  }

}
