import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-myfor',
  template: `
    <h1>Demo Custom Structural Directive</h1>
    <div>
      <ul>
        <li *myFor="let item of items; let i = index">
          {{i}} - {{ item.name }} - {{ item.location }}
        </li>
      </ul>

      <ul>
        <ng-template myFor [myForOf]="items" let-item let-i="index">
          <li> {{i}} - {{ item.name }} - {{ item.location }} </li>
        </ng-template>
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

  constructor(
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        { name: 'Emilio', location: 'Zaragoza', age: 54 }
      ];

    }, 2000);
  }
}
