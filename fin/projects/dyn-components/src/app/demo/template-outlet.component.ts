import { Component } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  template: `
  <ng-container [ngTemplateOutlet]="tmpl" [ngTemplateOutletContext]="ctx"></ng-container>

  <ng-container [ngTemplateOutlet]="tmpl"></ng-container>

  <ng-container *ngIf="items.length">
    <div *ngFor="let item of items">xxxxx</div>
  </ng-container>

  <ng-template #tmpl let-name let-location="location">
    <p>{{name}}, {{location}}</p>
  <ng-template>
  `
})

export class TemplateOutletComponent {
  items = [];

  ctx = {
    $implicit: 'Emilio',
    location: 'Zaragoza'
  }
}
