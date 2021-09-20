import { Component, OnInit } from '@angular/core';
import { File } from './file';

@Component({
  selector: 'demo-pipe',
  template: `
    <div>
      <div *ngFor="let file of files">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `
})

export class DemoPipeComponent implements OnInit {
  files: File[];

  constructor() { }

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
   }
}
