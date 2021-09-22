import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-credit-card',
  template: `
    <h1>Demo Credit Card Directive</h1>

    <div>
      <label>
        Credit Card Number
        <input
          name="credit-card"
          type="text"
          placeholder="Enter your 16-digit card number"
          credit-card
          >
      </label>

      <label tooltip="3 digits, back of your card" #mytooltip="tooltip">
        Enter your security code
        <span
          (mouseover)="mytooltip.show()"
          (mouseout)="mytooltip.hide()">?
        </span>
        <input type="text">
      </label>
    </div>
  `
})

export class DemoCreditCardComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
