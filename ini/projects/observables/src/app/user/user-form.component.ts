import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Document, Member } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  styles: [`
    label, input {
      display: block;
    }
    label {
      margin-top: 10px;
    }
    button, ngx-dropzone {
      margin-top: 20px;
    }
  `],
  template: `
    <h2>User Form</h2>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label for="name">Nombre</label>
      <input type="text" id="name" formControlName="name">
      <label for="lastname">Apellidos</label>
      <input type="text" id="lastname" formControlName="lastname">
      <label for="email">Email</label>
      <input type="text" id="email" formControlName="email">

      <button type="submit">Save</button>
    </form>
  `
})

export class UserFormComponent implements OnInit {
  form: FormGroup;

  // Simulo añadir 3 documentos neuvos, el primer ya existía en el usuario
  files: Document[] = [
    { id: 1, filename: 'file1.pdf', size: 280 },
    { id: null, filename: 'file2.pdf', size: 130, content: 'xxxxxxxxxxxxxxxxx'},
    { id: null, filename: 'file3.pdf', size: 130, content: 'yyyyyyyyyyyyyyyyy'},
    { id: null, filename: 'file4.pdf', size: 130, content: 'zzzzzzzzzzzzzzzzz'},
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.buildForm();
  }

  ngOnInit() { }

  buildForm() {
    this.form = this.fb.group({
      id: 1,
      name: 'Emilio',
      lastname: 'Calejero',
      email: 'emilio@gmail.com',
    });
  }

  onSubmit() {
    console.log('submit', this.form.value);
    if (this.files.length) {
      this.userService.updateUser(this.form.value, this.files).subscribe(
        response => console.log(response)
      );
    }
  }

}
