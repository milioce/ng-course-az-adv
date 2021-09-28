import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Mail } from '../../models/mail.model';

@Component({
  selector: 'app-mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view" *ngIf="message$ | async as message">
      <h2>{{ message.from }}</h2>
      <p>{{ message.full }}</p>
    </div>
    <div class="mail-reply">
      <textarea
        placeholder="Type your reply..."
        [value]="reply"
        (change)="updateReply($event.target.value)">
      </textarea>
      <button type="button" (click)="sendReply()">Send</button>
    </div>
  `
})

export class MailViewComponent implements OnInit {
  message$ = this.route.data.pipe( pluck('message') ) as Observable<Mail>;
  reply = '';
  hasUnsavedChanges = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = '';
      this.hasUnsavedChanges = false;
    });
   }

  updateReply(value: string) {
    this.reply = value;
    this.hasUnsavedChanges = true;
  }

  sendReply() {
    console.log('Sent!!');
    this.reply = '';
    this.hasUnsavedChanges = false;
  }

}
