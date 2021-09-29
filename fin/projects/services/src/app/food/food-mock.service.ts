import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from './food.service';

@Injectable()
export class FoodMockService {
  foods = [
    { name: 'Agua', price: 0.70 },
    { name: 'Cerveza', price: 1 },
    { name: 'Vino', price: 1 }
  ];

  constructor() {
    console.log('FoodMockService::constructor()');
   }

   getFood(): Observable<Food[]> {
     return of(this.foods);
   }

}
