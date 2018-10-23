import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
  <input #box
    (keyup.enter)="update(box.value)">

  <button (click)="update(box.value)">Submit</button>
  `,
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '';
  update(value: string) { 
    this.value = value;
    console.log(value);
  }

}
