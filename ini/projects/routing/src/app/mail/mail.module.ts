import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailAppComponent } from './components/app/mail-app.component';
import { MailFolderComponent } from './pages/folder/mail-folder.component';
import { MailItemComponent } from './components/item/mail-item.component';
import { MailViewComponent } from './components/view/mail-view.component';


export const ROUTES: Routes = [
  { path: 'folder/:name', component: MailFolderComponent },
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    MailAppComponent,
    MailFolderComponent,
    MailItemComponent,
    MailViewComponent
  ],
  exports: [
    MailAppComponent,
  ]
})
export class MailModule {}
