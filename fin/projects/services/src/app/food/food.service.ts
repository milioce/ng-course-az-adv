import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from '../core/core.model';
import { FOOD_API_TOKEN } from './food.token';

export interface Food {
  name: string,
  price: number
}

//     @Inject(FOOD_API_TOKEN) private api: string
@Injectable({providedIn: 'root'})
export class FoodService {
  // api = '/api/pizzas';

  constructor(
    private http: HttpClient,
    @Inject(FOOD_API_TOKEN) private api: string,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {
    console.log('FoodService', this.api, this.appConfig);
  }

  getPizzas(): Observable<Food[]> {
    return this.http.get<Food[]>(this.api + '/pizzas');
  }

  getSides(): Observable<Food[]> {
    return this.http.get<Food[]>(this.api + '/sides');
  }

  getDrinks(): Observable<Food[]> {
    return this.http.get<Food[]>(this.api + '/drinks');
  }

}
