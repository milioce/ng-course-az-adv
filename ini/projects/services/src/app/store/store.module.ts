import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreComponent } from './store.component';
import { STORE_CONFIG } from './store.config';

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
  providers: [
    {
      provide: STORE_CONFIG,
      useValue: { storeId: 10000, storeToken: 'AF02-0124-5565-1234'}
    }
  ],
})
export class StoreModule { }
