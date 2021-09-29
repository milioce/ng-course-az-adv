import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Food, FoodService } from '../food.service';

export abstract class PizzaService {
  getPizzas: () => Observable<Food[]>
}

@Component({
  selector: 'app-food-pizzas',
  providers: [
    /*
    {
      provide: FoodService,
      useFactory: (http) => new FoodService(http, '/api/pizzas'),
      deps: [HttpClient]
    }
    */
   {
     provide: PizzaService, useExisting: FoodService
   }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})

export class FoodPizzasComponent implements OnInit {
  items$: Observable<Food[]>;

  constructor(private foodService: PizzaService) { }

  ngOnInit() {
    this.items$ = this.foodService.getPizzas();
  }
}
