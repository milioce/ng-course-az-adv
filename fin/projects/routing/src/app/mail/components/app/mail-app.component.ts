import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet></router-outlet>
    </div>
    <div class="mail">
      <router-outlet name="pane"></router-outlet>
    </div>
  `
})

export class MailAppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onActivate(event) {
    console.log('Activate', event);
  }

  onDeactivate(event) {
    console.log('Deactivate', event);
  }
}
