import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CONTROL_VALUE_ACCESOR : Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef( () => CounterComponent ),
  multi: true
}

@Component({
  selector: 'app-counter',
  styleUrls: ['counter.component.scss'],
  providers: [CONTROL_VALUE_ACCESOR],
  template: `
    <div class="stock-counter" [class.focused]="focus">
      <div>
        <div tabindex="0"
          (keydown)="onKeyDown($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
        >
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

export class CounterComponent implements OnInit, ControlValueAccessor {
  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;
  focus: boolean;

  private onModelChange: Function;
  private onTouch: Function;

  constructor() { }

  ngOnInit() { }

  writeValue(value) {
    this.value = value || 0;
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  onKeyDown(event: KeyboardEvent) {
    console.log(event.key);

    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    }

    if (handlers[event.key]) {
      handlers[event.key]();

      event.preventDefault();
      event.stopPropagation();
    }

    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
  }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;

      this.onModelChange(this.value);
    }

    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.onModelChange(this.value);
    }

    this.onTouch();
  }
}
