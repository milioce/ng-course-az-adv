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
    </div>
  `
})

export class DemoCreditCardComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
