import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StoreConfig, STORE_CONFIG } from './store.config';

@Injectable({providedIn: 'root'})
export class StoreService {
  constructor(
    private http: HttpClient,
    @Inject(STORE_CONFIG) private config: StoreConfig
  ) { }

  getProducts() {
    const options = {
      headers: new HttpHeaders({
        'store-id': this.config.storeId.toString(),
        'store-token': this.config.storeToken
      })
    };

    return this.http.get(`/api/products`, options);
  }

}
