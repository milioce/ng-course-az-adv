import { Component, Output, EventEmitter, ContentChild, AfterContentInit, ContentChildren, QueryList, ViewChild, AfterViewInit, ChangeDetectorRef, ViewChildren, ElementRef, Renderer2 } from '@angular/core';

import { User } from './auth-form.interface';
import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message #msg [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>

        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage = false;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @ViewChild(AuthMessageComponent, {static: true}) message: AuthMessageComponent;
  // @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  // @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @ViewChild('email') email: ElementRef;

  @ViewChild('msg') msg: AuthMessageComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe(checked => this.showMessage = checked);
    }
    if (this.message) {
      this.message.days = 30;
    }

  }

  ngAfterViewInit() {
    if (this.message) {

      /*
      this.message.forEach(item => {
        item.days = 30;
      } );
      this.cd.detectChanges();
      */
    }

    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();

    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.renderer.selectRootElement(this.email.nativeElement).focus();
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
