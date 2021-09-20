import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-onpush',
  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <app-example-one [user]="user"></app-example-one>
        <hr>
        <app-example-two [user]="user"></app-example-two>
      </div>
    </div>
  `
})

export class DemoOnpushComponent {

  user: any = {
    name: 'Carlos Campos',
    age: 25,
    location: 'Sevilla'
  };

  addProp() {
    this.user.email = 'carlos.campos@gmail.com';
  }

  changeName() {
    this.user.name = 'Diego Sánchez';
  }

  changeUser() {
    this.user = {
      name: 'Eva Esteban',
      age: 31,
      location: 'Barcelona'
    };
  }

}
