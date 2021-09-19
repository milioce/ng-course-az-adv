import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
        <input
          type="text"
          placeholder="Discount coupon"
          formControlName="coupon">
      </div>
    </div>
  `
})

export class CartCouponComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() { }
}
