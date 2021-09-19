import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {
  constructor(private element: ElementRef) { }
}
