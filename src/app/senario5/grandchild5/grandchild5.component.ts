import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchild5',
  template: `
  <p>In the grand child</p>
  <input #box
  (keyup.enter)="update(box.value)">

<button (click)="update(box.value)">Submit</button>
<app-child5 [value]="value"></app-child5>
  `,
  styleUrls: ['./grandchild5.component.css']
})
export class Grandchild5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value = '';
  update(value: string) { 
    this.value = value;
    console.log(value);
  }

}
