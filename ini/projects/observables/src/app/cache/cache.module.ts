import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CacheComponent } from './cache.component';

import { Informe1Component } from './components/informe1.component';
import { Informe2Component } from './components/informe2.component';
import { Informe3Component } from './components/informe3.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CacheComponent,
    children: [
      { path: 'informe1', component: Informe1Component },
      { path: 'informe2', component: Informe2Component },
      { path: 'informe3', component: Informe3Component }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    CacheComponent,
    Informe1Component,
    Informe2Component,
    Informe3Component
  ],
  providers: [],
})
export class CacheModule { }
