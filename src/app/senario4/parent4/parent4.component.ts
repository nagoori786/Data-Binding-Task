import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent4',
  template:`
  <p>{{childvalue}}</p>
  <p>In the parent</p>
  `,
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component {

  constructor() { }
  @Input('value') childvalue : string;
}
