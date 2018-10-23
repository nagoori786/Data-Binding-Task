import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-parent5',
  template: `
    <p>in the parent</p>
    <p>{{grandChildValueInParent}}</p>

  `,
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component {

  constructor() { }
  @Input('grandChildValue') grandChildValueInParent : string;

}
