import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'app-dynamic',
  template: `
    <div>
        <button type="button" (click)="destroyComponent()">Destroy</button>
        <button type="button" (click)="moveComponent()">Move</button>
       <div #entry></div>
    </div>
  `
})
export class DynamicComponent implements AfterViewInit {
  component: ComponentRef<AuthFormComponent>

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {

    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);

    this.component = this.entry.createComponent(authFormFactory);

    this.entry.createComponent(authFormFactory);

    this.component.instance.title = 'Create new user';
    this.cd.detectChanges();

    this.component.instance.submitted.subscribe(console.log);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }



}
