import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
  <input #box
    (keyup.enter)="update(box.value)">

  <button (click)="update(box.value)">Submit</button>
  <app-child [value]="value"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  constructor() { }


  value = '';
  update(value: string) { 
    this.value = value;
  }

}
