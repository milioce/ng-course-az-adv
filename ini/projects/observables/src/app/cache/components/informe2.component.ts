import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-informe2',
  template: `
    <h2>Informe 2</h2>
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

export class Informe2Component implements OnInit {
  items$ = this.service.getCountries();

  constructor(private service: DataService) { }

  ngOnInit() {
    console.log('Oninit component 2');
  }

  ngOnDestroy() {
    console.log('Destroy component 2');
  }
}
