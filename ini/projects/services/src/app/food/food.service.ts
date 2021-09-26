import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Food {
  name: string,
  price: number
}

@Injectable({providedIn: 'root'})
export class FoodService {
  api = '/api/pizzas';

  constructor(
    private http: HttpClient
  ) { }

  getFood(): Observable<Food[]> {
    return this.http.get<Food[]>(this.api);
  }

}
