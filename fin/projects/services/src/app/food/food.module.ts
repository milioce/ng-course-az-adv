import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodDrinksComponent } from './components/food-drinks.component';
import { FoodPizzasComponent } from './components/food-pizzas.component';
import { FoodSidesComponent } from './components/food-sides.component';

import { FoodComponent } from './food.component';
import { FoodService } from './food.service';
import { FOOD_API_TOKEN } from './food.token';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FoodComponent,
    FoodPizzasComponent,
    FoodSidesComponent,
    FoodDrinksComponent,
  ],
  exports: [
    FoodComponent
  ],
  providers: [
    { provide: FOOD_API_TOKEN, useValue: '/api' },
  ],
})
export class FoodModule { }
