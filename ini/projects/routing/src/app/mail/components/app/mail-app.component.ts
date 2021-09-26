import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet></router-outlet>
    </div>
  `
})

export class MailAppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
