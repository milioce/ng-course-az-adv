import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodMockService } from '../food-mock.service';
import { Food, FoodService } from '../food.service';

export abstract class SideService {
  getSides: () => Observable<Food[]>
}

@Component({
  selector: 'app-food-sides',
  providers: [
    { provide: SideService, useExisting: FoodService }
    /*
    {
      provide: FoodService,
      useFactory: () => new FoodMockService()
    }
    {
      provide: FoodService,
      useFactory: (http) => new FoodService(http, '/api/sides'),
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

export class FoodSidesComponent implements OnInit {
  items$: Observable<Food[]>;

  constructor(private foodService: SideService) { }

  ngOnInit() {
    this.items$ = this.foodService.getSides();
  }
}
