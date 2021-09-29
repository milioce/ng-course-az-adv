import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1>Error</h1>
    <p>Se ha producido un eroor</p>
  `
})

export class ErrorComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
