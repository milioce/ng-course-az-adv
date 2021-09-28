import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <h1>Routing project</h1>
      </header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="['/dashboard']"
            routerLinkActive="active">
            Dashboard
          </a>
          <a
            [routerLink]="[{ outlets: {primary: 'mail/folder/inbox', pane: null} }]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            [routerLink]="[{ outlets: {primary: 'mail/folder/trash', pane: null} }]"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'routing';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
