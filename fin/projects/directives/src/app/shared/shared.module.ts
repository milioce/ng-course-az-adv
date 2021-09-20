import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreditCardDirective } from './credit-card.directive';
import { MyForDirective } from './my-for.directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    CreditCardDirective,
    TooltipDirective,
    MyForDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreditCardDirective,
    TooltipDirective,
    MyForDirective
  ],
  providers: [],
})
export class SharedModule { }
