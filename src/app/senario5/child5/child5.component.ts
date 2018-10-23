import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child5',
  template: `
    <app-parent5 [grandChildValue]="grandChildValue"></app-parent5>
  `,
  styleUrls: ['./child5.component.css']
})
export class Child5Component {

  constructor() { }
  @Input('value') grandChildValue : string;


}
