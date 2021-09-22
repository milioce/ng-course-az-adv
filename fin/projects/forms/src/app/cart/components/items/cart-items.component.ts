import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ProductMap } from '../../model/cart.model';

@Component({
  selector: 'app-cart-items',
  styleUrls: ['cart-items.component.scss'],
  template: `
  <h2>Cart Items</h2>
  <div class="stock-product" [formGroup]="parent">
    <div formArrayName="cart">
      <div *ngFor="let item of cartItems; let i = index;">
        <div class="stock-product__content" [formGroupName]="i">
          <div class="stock-product__name"> {{ getProductName(item) }}  </div>

            <app-counter
              [step]="10"
              [min]="10"
              [max]="100"
              formControlName="quantity"
            ></app-counter>

            <button type="button" (click)="onRemove(i)">Remove</button>
        </div>
      </div>
    </div>
  </div>

  `
})

export class CartItemsComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() productMap: ProductMap;
  @Output() removed = new EventEmitter();

  get cartItems() {
    return (this.parent.get('cart') as FormArray).controls;
  }

  constructor() { }

  getProductName(control: FormControl) {
    if (this.productMap) {
      const id = +control.value.product_id;
      return this.productMap.get(id).name;
    }
  }

  onRemove(index: number) {
    this.removed.emit(index);
  }

  ngOnInit() { }
}
