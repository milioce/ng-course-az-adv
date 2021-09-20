import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthFormModule } from './auth-form/auth-form.module';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormModule,
    FormsModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
