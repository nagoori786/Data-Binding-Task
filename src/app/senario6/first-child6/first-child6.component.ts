import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child6',
  template: `
  <p>In the First child</p>
  <input #box
  (keyup.enter)="update(box.value)">

<button (click)="update(box.value)">Submit</button>
<app-parent6 [value]="value"></app-parent6>
  `,
  styleUrls: ['./first-child6.component.css']
})
export class FirstChild6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '';
  update(value: string) { 
    this.value = value;
    console.log(value);
  }

}
