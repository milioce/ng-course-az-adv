import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-informe1',
  template: `
    <h2>Informe 1</h2>
    <form>
      <select name="country">
        <option value="">Select country</option>
        <option *ngFor="let item of items$ | async" [value]="item.id">
          {{item.name}}
        </option>
      </select>
      <button type="button">Submit</button>
    </form>
  `
})

export class Informe1Component implements OnInit, OnDestroy {
  items$ = this.service.getCountries();

  constructor(private service: DataService) { }

  ngOnInit() {
    console.log('Oninit component 1');
  }

  ngOnDestroy() {
    console.log('Destroy component 1');
  }
}
