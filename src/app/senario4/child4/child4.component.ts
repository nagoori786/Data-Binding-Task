import { Component } from '@angular/core';

@Component({
  selector: 'app-child4',
  template:`
  <p>In the child</p>
  <input #box
    (keyup.enter)="update(box.value)">

  <button (click)="update(box.value)">Submit</button>
  <app-parent4 [value]="value"></app-parent4>
  `,
  styleUrls: ['./child4.component.css']
})
export class Child4Component{

  constructor() { }
  value = '';
  update(value: string) { 
    this.value = value;
  }
}
