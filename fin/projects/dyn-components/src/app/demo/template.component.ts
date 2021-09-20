import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
    <div #entry></div>

    <ng-template #tmpl let-name let-location="location">
      <span>{{name}}</span>, <span>{{location}}</span>
    </ng-template>
  `
})

export class TemplateComponent implements AfterViewInit {
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterViewInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Emilio',
      location: 'Zaragoza'
    });
  }

}
