import { Component } from '@angular/core';

@Component({
  selector: 'app-cache',
  template: `
    <h1>Cache Demo</h1>
    <p>
      <a routerLink="informe1">Informe1</a>
      <a routerLink="informe2">Informe2</a>
      <a routerLink="informe3">Informe3</a>
    <p>
    <router-outlet></router-outlet>
  `
})

export class CacheComponent {
  constructor() { }
}
