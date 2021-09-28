import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MailViewComponent } from './mail-view.component';

@Injectable({providedIn: 'root'})
export class MAilViewGuard implements CanDeactivate<MailViewComponent> {
  canDeactivate(
    component: MailViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): boolean {
    if (component.hasUnsavedChanges) {
      return window.confirm('are you sure?');
    }

    return true;
  }
}
