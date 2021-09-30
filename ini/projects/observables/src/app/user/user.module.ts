import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form.component';

import { UserComponent } from './user.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'form',
    component: UserFormComponent,
  },

];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  declarations: [UserComponent, UserFormComponent],
  providers: [],
})
export class UserModule { }
