import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../model/cart.model';

@Component({
  selector: 'app-cart-selector',
  styleUrls: ['cart-selector.component.scss'],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select product</option>
          <option *ngFor="let product of products"
            [value]="product.id">
            {{ product.name }}
          </option>
        </select>

        <input type="number" step="10" min="10" max="1000"
        formControlName="quantity">

        <button type="button" (click)="onAdd()"
        [disabled]="parent.hasError('cartItemExists')">Add to Cart</button>

        <div class="stock-selector__error" *ngIf="productExists">
          the product already exists in the cart
        </div>

      </div>

    </div>
  `
})

export class CartSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() products: Product[];

  @Output() added = new EventEmitter();

  get productExists() {
    return (
      this.parent.get('selector.product_id').dirty &&
      this.parent.hasError('cartItemExists')
    );
  }

  constructor() { }

  ngOnInit() { }

  onAdd() {
    this.added.emit(
      this.parent.get('selector').value
    );

    this.parent.get('selector').reset({
      product_id: '',
      quantity: 1
    });
  }

}
