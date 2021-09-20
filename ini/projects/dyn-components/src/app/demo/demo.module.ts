import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DynamicComponent } from './dynamic.component';
import { TemplateComponent } from './template.component';
import { TemplateOutletComponent } from './template-outlet.component';
import { DemoOnpushComponent } from './onpush/demo-onpush.component';
import { ExampleOneComponent } from './onpush/example-one.component';
import { ExampleTwoComponent } from './onpush/example-two.component';

@NgModule({
  declarations: [
    DynamicComponent,
    TemplateComponent,
    TemplateOutletComponent,
    DemoOnpushComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicComponent,
    TemplateComponent,
    TemplateOutletComponent,
    DemoOnpushComponent
  ],
  providers: [],
})
export class DemoModule { }
