import { InjectionToken } from "@angular/core";

export class AppConfig {
  apiHost = '';
  level = 0;
  apiKey = '';
  default = 'es';
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
