import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-two',
  template: `
    <div class="example-two">
      <h2>Default</h2>
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
    </div>
  `,
    styles: [`
    .example-two {
      font-size: 19px;
      margin-bottom: 10px;
      width: 200px;
    }
  `]
})

export class ExampleTwoComponent {
  @Input() user;
}
