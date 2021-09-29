import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodMockService } from '../food-mock.service';
import { Food, FoodService } from '../food.service';

export abstract class DrinkService {
  getDrinks: () => Observable<Food[]>
}

@Component({
  selector: 'app-food-drinks',
  providers: [
    { provide: DrinkService, useExisting: FoodService }
    // { provide: FoodService, useClass: FoodMockService }
    /*
    {
      provide: FoodService,
      useFactory: (http) => new FoodService(http, '/api/drinks'),
      deps: [HttpClient]
    }
    */
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})

export class FoodDrinksComponent implements OnInit {
  items$: Observable<Food[]>;

  constructor(private foodService: DrinkService) { }

  ngOnInit() {
    this.items$ = this.foodService.getDrinks();
  }
}
