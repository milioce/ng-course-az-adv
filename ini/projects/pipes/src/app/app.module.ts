import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPipeComponent } from './demo/demo-pipe.component';
import { DemoProviderComponent } from './demo/demo-provider.component';
import { FileSizePipe } from './demo/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipeComponent,
    DemoProviderComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
