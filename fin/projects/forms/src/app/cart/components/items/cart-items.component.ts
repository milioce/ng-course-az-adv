import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-items',
  styleUrls: ['cart-items.component.scss'],
  template: `
  <h2>Cart Items</h2>
  <div class="stock-product">
    <div>
      <div *ngFor="let item of cartItems; let i = index;">
        <div class="stock-product__content">
          <div class="stock-product__name">  </div>
          <input type="number"
            step="10"
            min="10"
            max="100">
            <button type="button">Remove</button>
        </div>
      </div>
    </div>
  </div>

  `
})

export class CartItemsComponent implements OnInit {
  @Input() parent: FormGroup;

  get cartItems() {
    return [];
  }

  constructor() { }

  ngOnInit() { }
}
