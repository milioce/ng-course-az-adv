import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Mail } from '../../models/mail.model';

// [routerLink]="['', { outlets: {pane: ['message', message.id]} }]"

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a
      (click)="navigateToMessage()"
      routerLinkActive="active"
      class="mail-item">
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;

  constructor(private router: Router) {}

  navigateToMessage() {
    this.router.navigate([
      'mail',
      { outlets: {pane: ['message', this.message.id]} }
    ]);
  }
}
