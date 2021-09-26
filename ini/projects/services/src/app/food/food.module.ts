import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodDrinksComponent } from './components/food-drinks.component';
import { FoodPizzasComponent } from './components/food-pizzas.component';
import { FoodSidesComponent } from './components/food-sides.component';

import { FoodComponent } from './food.component';

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
  providers: [],
})
export class FoodModule { }
