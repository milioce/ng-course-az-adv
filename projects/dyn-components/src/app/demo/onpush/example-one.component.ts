import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="example-one">
      <h2>OnPush</h2>
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
    </div>
  `,
    styles: [`
    .example-one {
      font-size: 19px;
      margin-bottom: 10px;
      width: 200px;
    }
  `],
})

export class ExampleOneComponent {
  @Input() user;
}
