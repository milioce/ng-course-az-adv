import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './pages/folder/mail-folder.component';
import { MailItemComponent } from './components/item/mail-item.component';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
  { path: 'folder/:name', component: MailFolderComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ],
  declarations: [
    MailFolderComponent,
    MailItemComponent
  ],
  exports: [
  ]
})
export class MailModule {}
