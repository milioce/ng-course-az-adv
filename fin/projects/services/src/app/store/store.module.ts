import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreComponent } from './store.component';
import { StoreConfig, STORE_CONFIG } from './store.config';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoreComponent
  ],
  providers: [],
})
export class StoreModule {
  static forRoot(config: StoreConfig): ModuleWithProviders<StoreModule> {
    return {
      ngModule: StoreModule,
      providers: [
        { provide: STORE_CONFIG, useValue: config || {} }
      ]
    }
  }
 }
