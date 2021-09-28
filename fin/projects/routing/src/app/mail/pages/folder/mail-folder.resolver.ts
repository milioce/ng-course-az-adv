import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Mail } from '../../models/mail.model';
import { MailService } from '../../services/mail.service';

@Injectable({ providedIn: 'root' })
export class MailFolderResolver implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Mail[]> {
    return this.mailService.getFolder(route.params.name).pipe(
      catchError(() => of([]))
    );
  }
}
