import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-myfor',
  template: `
    <h1>Demo Custom Structural Directive</h1>
    <div>
      <ul>
        <li *ngFor="let item of items; let i = index">
          {{i}} - {{ item.name }} - {{ item.location }}
        </li>
      </ul>
    </div>
  `
})

export class DemoMyForComponent implements OnInit {
  items = [
    { name: 'Carlos', age: 40, location: 'Zaragoza' },
    { name: 'Ana', age: 25, location: 'Madrid' },
    { name: 'Juan', age: 40, location: 'Barcelona' }
  ]

  constructor() { }

  ngOnInit() { }
}
