import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { AppConfig, APP_CONFIG } from './core.model';
import { ErrorComponent } from './error.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

const appInitializer1 = () => {
  console.log('appInitializer1');

  return Promise.resolve(true);
}

const appFactoryInitializer = (_injector: Injector) => {
  console.log('appInitializer2');
  return () => {
    const httpClient = _injector.get(HttpClient);
    const appConfig = _injector.get(APP_CONFIG);

    return httpClient.get('/assets/config.json')
      .toPromise()
      .then((data: AppConfig) => {

        appConfig.apiHost = data.apiHost;
        appConfig.apiKey = data.apiKey;
        appConfig.default = data.default;
        appConfig.level = data.level;

        return true;
      })
      .catch(() => {
        console.error('Error obteniendo el fichero de configuración');
        return true;
      });
  }
}

@NgModule({
  imports: [],
  exports: [
    ErrorComponent
  ],
  declarations: [
    ErrorComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: APP_CONFIG,
      useClass: AppConfig
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => appInitializer1,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appFactoryInitializer,
      deps: [Injector],
      multi: true
    }
  ],
})
export class CoreModule { }
