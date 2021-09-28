import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailAppComponent } from './components/app/mail-app.component';
import { MailFolderComponent } from './pages/folder/mail-folder.component';
import { MailItemComponent } from './components/item/mail-item.component';
import { MailViewComponent } from './components/view/mail-view.component';
import { MailFolderResolver } from './pages/folder/mail-folder.resolver';
import { MailViewResolver } from './components/view/mail-view.resolve';
import { AuthGuard } from '../auth/auth.guard';
import { MAilViewGuard } from './components/view/mail-view.guard';


export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    // canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolver
        },
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
        canDeactivate: [MAilViewGuard],
        resolve: {
          message: MailViewResolver
        }
      },
    ]
  },
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
