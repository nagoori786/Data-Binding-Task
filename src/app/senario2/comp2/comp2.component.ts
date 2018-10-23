import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
  <input #box
    (keyup.enter)="update(box.value)">

  <button (click)="update(box.value)">Submit</button>
  <p>{{value}}</p>
  `,
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '';
  update(value: string) { 
    this.value = value;
  }

}
