import { AbstractControl, FormGroup } from "@angular/forms";

export class CartValidators {

  static validCoupon(control: AbstractControl) {
    // A999
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);

    return valid ? null : { couponInvalid: true };
  }

  static checkCartItemExists(control: FormGroup) {
    const product = control.get('selector.product_id');
    const items = control.get('cart');

    if (!product || !items) {
      return null;
    }

    if (product.value === '')  {
      return null;
    }

    const exists = items.value.some(item => +item.product_id === +product.value);

    return exists ? { cartItemExists: true} : null;
  }

}
