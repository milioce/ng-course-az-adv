import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  styles: [`
    app-food-pizzas,
    app-food-sides,
    app-food-drinks {
      display: block;
      border-bottom: 2px solid #eee;
      padding: 20px 0;
    }
  `],
  template: `
    <div>
      <app-food-pizzas></app-food-pizzas>
      <app-food-sides></app-food-sides>
      <app-food-drinks></app-food-drinks>
    </div>
  `
})

export class FoodComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
