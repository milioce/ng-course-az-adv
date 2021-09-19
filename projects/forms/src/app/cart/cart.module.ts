import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CartComponent } from './cart.component';
import { CartSelectorComponent } from './components/selector/cart-selector.component';
import { CartItemsComponent } from './components/items/cart-items.component';
import { CounterComponent } from './components/counter/counter.component';
import { CartCouponComponent } from './components/coupon/cart-coupon.component';

@NgModule({
  imports: [
    CommonModule,
     HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CartComponent
  ],
  declarations: [
    CartComponent,
    CartSelectorComponent,
    CartItemsComponent,
    CounterComponent,
    CartCouponComponent
  ],
  providers: [],
})
export class CartModule { }
