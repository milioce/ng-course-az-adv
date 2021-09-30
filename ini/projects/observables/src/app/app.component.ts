import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a routerLink="/cache">Cache</a>
      <a routerLink="/user">User List</a>
      <a routerLink="/user/form">User Form</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    a {
      margin: 0 10px;
    }
  `]
})
export class AppComponent {
  title = 'observables';
}
