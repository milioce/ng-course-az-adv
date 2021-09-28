import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { pluck } from 'rxjs/operators';

 @Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ title$ | async}}</h2>
    <mail-item
      *ngFor="let message of (data$ | async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent implements OnInit {
  data$ = this.route.data.pipe(
    pluck('messages')
  );

  title$ = this.route.params.pipe(
    pluck('name')
  );

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // console.log('MailFolderComponent:.OnInit()');
  }

}
