import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-dynamic></app-dynamic>
  `
})
export class AppComponent {
  title = 'Application: Dynamic Components';

}
