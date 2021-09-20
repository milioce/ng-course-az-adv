import { Component } from '@angular/core';
import { User } from '../auth-form/auth-form.interface';

@Component({
  selector: 'app-dynamic',
  template: `
    <div>
       <div #entry></div>
    </div>
  `
})
export class DynamicComponent {

  loginUser(user: User) {
    console.log('Login', user);
  }
}
