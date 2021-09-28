import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-coupon',
  styleUrls: ['cart-coupon.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input
          type="text"
          placeholder="Postal code"
          formControlName="postalCode">
        <div class="error" *ngIf="error('postalCode')">
          Postal code is required
        </div>

        <input
          type="text"
          placeholder="Discount coupon"
          formControlName="coupon">
          <div class="error" *ngIf="error('coupon', 'couponIvalid')">
            Invalid coupon: 1 letter, 3 numbers
          </div>
          <div class="error" *ngIf="error('coupon', 'couponUnknown')">
            Unknown coupon
          </div>
          <div class="error" *ngIf="error('coupon', 'couponExpired')">
            Unknown expired
          </div>

      </div>
      <div class="error" *ngIf="error('coupon', 'couponInvalid')">
          Coupon is invalid
      </div>

    </div>
  `
})

export class CartCouponComponent implements OnInit {
  @Input() parent: FormGroup;

  get postalCode() {
    return this.parent.get('store.postalCode') as FormControl;
  }

  constructor() {
   }

  error(formKey: string, errorCode = 'required'): boolean {
    const control = this.parent.get(`store.${formKey}`);
    return control.hasError(errorCode) && control.touched;
  }

  ngOnInit() {
    console.log(this.parent.get('store.coupon'));
  }
}
