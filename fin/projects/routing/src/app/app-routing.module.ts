import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';

class CustomPreload implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
   return route.data.preload ? load() : EMPTY
  }
}

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(mod => mod.DashboardModule),
    data: { preload: false },
    canLoad: [ AuthGuard ]
  },
  { path: '', redirectTo: 'mail/folder/inbox', pathMatch: 'full' }
];

@NgModule({
  providers: [CustomPreload],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreload})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
