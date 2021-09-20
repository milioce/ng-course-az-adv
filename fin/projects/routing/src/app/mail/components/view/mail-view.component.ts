import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      I am a message!
    </div>
  `
})

export class MailViewComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
