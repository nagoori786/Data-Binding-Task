import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-second-child6',
  template: `
  <p>In the second child</p>
  <p>{{firstChildValueInSecondChild}}</p>
  `,
  styleUrls: ['./second-child6.component.css']
})
export class SecondChild6Component{

  constructor() { }
  @Input('firstChildValue') firstChildValueInSecondChild : string;

}
