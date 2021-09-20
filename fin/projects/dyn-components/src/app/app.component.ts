import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-template-outlet></app-template-outlet>
  `
})
export class AppComponent {
  title = 'Application: Dynamic Components';

}
