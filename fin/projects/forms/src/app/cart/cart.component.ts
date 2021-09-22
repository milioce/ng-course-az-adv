import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Item, Product, ProductMap } from './model/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form">

        <app-cart-coupon [parent]="form"></app-cart-coupon>

        <app-cart-selector
          [parent]="form"
          [products]="products"
          (added)="onAddItem($event)">
        </app-cart-selector>

        <app-cart-items
          [parent]="form"
          [productMap]="productMap"
          (removed)="onRemoveItem($event)"
        ></app-cart-items>

        <div class="stock-inventory__price">
          Total: {{ total }}
        </div>

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
  products: Product[];
  productMap : ProductMap;
  total: number;

  constructor(private fb: FormBuilder, private cartService: CartService) {

    /*
    this.form = new FormGroup({
      selector: new FormGroup({
        product_id: new FormControl(''),
        quantity: new FormControl('10')
      }),
      cart: new FormArray([])
    });
    */

    this.form = this.fb.group({
      store: this.fb.group({
        postalCode: ['', Validators.required],
        coupon: ['']
      }),
      selector: this.fb.group({
        product_id: '',
        quantity: 10
      }),
      cart: this.fb.array([])
    });

    this.form.get('cart').valueChanges.subscribe(
      value => this.calculateTotal(value)
    );

  }

  ngOnInit() {
    const cart$ = this.cartService.getCartItems();
    const products$ = this.cartService.getproducts();

    forkJoin([cart$, products$]).subscribe( ([cart, products]) => {

      this.products = products;
      const map = products.map<[number, Product]>(product => [product.id, product]);
      this.productMap = new Map(map);

      cart.forEach(item => {
        this.addItem(this.createItem(item));
      });
      this.calculateTotal(this.form.get('cart').value);
    }

    );
  }

  onAddItem(item: Item) {
    this.addItem(this.createItem(item));
  }

  onRemoveItem(index: number) {
    const control = this.form.get('cart') as FormArray;
    control.removeAt(index);
  }

  private createItem(item: Item): FormGroup {
    return this.fb.group({
      product_id: item.product_id,
      quantity: item.quantity
    });
  }

  private addItem(group: FormGroup) {
    const control = this.form.get('cart') as FormArray;
    control.push(group);
  }

  private calculateTotal(items: Item[]) {
    const total = items.reduce((prev, next) => {
      const totalNext = next.quantity * this.productMap.get(+next.product_id).price;
      return prev + totalNext;
    }, 0);

    this.total = total;
  }

}
