import { InjectionToken } from '@angular/core';

export interface StoreConfig {
  storeId: number,
  storeToken: string
}

export const STORE_CONFIG = new InjectionToken<StoreConfig>('STORE_CONFIG');
