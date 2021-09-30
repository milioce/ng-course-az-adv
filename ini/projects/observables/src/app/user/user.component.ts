import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <h1>User Demo</h1>
    <div class="users">
      <div class="filters">
        <form>
          <label for="name">Nombre</label>
          <input type="text" id="name"
            (input)="onNameFilter($event.target.value)">

          <label for="category">Categoría</label>
          <select id="category" (change)="onCategoryFilter($event.target.value)">
            <option value="">Select...</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>

        </form>
      </div>
      <div class="list">
        <ul>
          <li *ngFor="let user of users$| async">
            {{ user.id }} - {{ user.name }} - {{ user.category }}
          </li>
        </ul>
      </div>
    </div>
  `
})

export class UserComponent implements OnInit {

  users$: Observable<User[]>

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    // this.users$ = this.solution();
   }

  onCategoryFilter(category: string) {
  }

  onNameFilter(name: string) {
  }

}
