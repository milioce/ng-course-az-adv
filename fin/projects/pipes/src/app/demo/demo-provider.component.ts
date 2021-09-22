import { Component, OnInit } from '@angular/core';
import { File } from './file';
import { FileSizePipe } from './filesize.pipe';

@Component({
  selector: 'demo-provider',
  providers: [FileSizePipe],
  template: `
    <div>
      <div *ngFor="let file of files">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `
})

export class DemoProviderComponent implements OnInit {
  files: any[];

  constructor(private fileSizePipe: FileSizePipe) { }

  ngOnInit() {
    const files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];

    this.files = files.map(item => {
      return {
        name: item.name,
        type: item.type,
        size: this.fileSizePipe.transform(item.size, ' mb')
      };
    });

   }
}
