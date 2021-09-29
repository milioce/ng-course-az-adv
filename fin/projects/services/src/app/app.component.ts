import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig, APP_CONFIG } from './core/core.model';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="onTestError()">Test error</button>
    <button type="button" (click)="onNavigate('food')">Goto Food</button>
    <button type="button" (click)="onNavigate('store')">Goto Store</button>
    <router-outlet></router-outlet>
  `,
  styles: [`
    button {
      margin: 0 10px;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'services';

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {
    console.log('AppComponent::constructor');
  }

  ngOnInit() {
    console.log('AppComponent appConfig', this.appConfig);
  }

  onTestError() {
    this.http.get('/api/error').subscribe();
  }

  onNavigate(path) {
    this.router.navigate([path]);
  }
}
