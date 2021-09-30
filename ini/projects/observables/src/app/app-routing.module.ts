import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cache', pathMatch: 'full' },
  {
    path: 'cache',
    loadChildren: () => import('./cache/cache.module')
      .then(mod => mod.CacheModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(mod => mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
