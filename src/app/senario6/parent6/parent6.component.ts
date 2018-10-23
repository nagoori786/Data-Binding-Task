import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent6',
  template: `
  <p>passing the value via parent</p>
    <app-second-child6 [firstChildValue]="firstChildValue"></app-second-child6>
  `,
  styleUrls: ['./parent6.component.css']
})
export class Parent6Component{

  constructor() { }
  @Input('value') firstChildValue : string;

}
