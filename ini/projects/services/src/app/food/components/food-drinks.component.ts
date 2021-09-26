import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food, FoodService } from '../food.service';

@Component({
  selector: 'app-food-drinks',
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

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
