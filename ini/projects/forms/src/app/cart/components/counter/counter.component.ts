import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  styleUrls: ['counter.component.scss'],
  template: `
    <div class="stock-counter">
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <button type="button" (click)="increment()" [disabled]="value === max">+</button>
            <button type="button" (click)="decrement()"  [disabled]="value === min">-</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class CounterComponent implements OnInit {
  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;

  constructor() { }

  ngOnInit() { }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
    }
  }
}
