import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of (products | async)">
          #{{ item.id }} - {{ item.name }}
        </li>
      </ul>
    </div>
  `
})

export class StoreComponent implements OnInit {
  products = this.service.getProducts();

  constructor(private service: StoreService) { }

  ngOnInit() { }
}
