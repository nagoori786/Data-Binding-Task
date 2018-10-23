import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
 
  <p>{{parentValue}}</p>
  <p>In the Child</p>
  `
})
export class ChildComponent {

  constructor() { }

  @Input('value') parentValue : string;


}
