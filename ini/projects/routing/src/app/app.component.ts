import { Component, OnInit } from '@angular/core';

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
            routerLink="folder/inbox"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            routerLink="folder/trash"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <app-mail></app-mail>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'routing';

  ngOnInit() {}
}
