import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Product } from './model/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form">

        <app-cart-selector [parent]="form"></app-cart-selector>

        <app-cart-items [parent]="form"></app-cart-items>

        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Submit</button>
        </div>

        <pre> {{ form.value | json }} </pre>

      </form>
    </div>
  `
})

export class CartComponent implements OnInit {
  form: FormGroup;
  products;

  constructor(private fb: FormBuilder, private cartService: CartService) {

    this.form = new FormGroup({
      selector: new FormGroup({
        product_id: new FormControl(''),
        quantity: new FormControl('10')
      }),
      cart: new FormArray([])
    });

    /*
    this.form = this.fb.group({
      selector: this.fb.group({
        product_id: '',
        quantity: 10
      }),
      cart: this.fb.array([])
    });
    */

  }

  ngOnInit() {
    const cart$ = this.cartService.getCartItems();
    const products = this.cartService.getproducts();
  }
}
