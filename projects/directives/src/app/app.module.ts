import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { DemoCreditCardComponent } from './demo/demo-credit-card.component';
import { DemoMyForComponent } from './demo/demo-my-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCreditCardComponent,
    DemoMyForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
