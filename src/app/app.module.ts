import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './senario1/comp1/comp1.component';
import { Comp2Component } from './senario2/comp2/comp2.component';
import { ParentComponent } from './senario3/parent/parent.component';
import { ChildComponent } from './senario3/child/child.component';
import { Parent4Component } from './senario4/parent4/parent4.component';
import { Child4Component } from './senario4/child4/child4.component';
import { Parent5Component } from './senario5/parent5/parent5.component';
import { Child5Component } from './senario5/child5/child5.component';
import { Grandchild5Component } from './senario5/grandchild5/grandchild5.component';
import { Parent6Component } from './senario6/parent6/parent6.component';
import { FirstChild6Component } from './senario6/first-child6/first-child6.component';
import { SecondChild6Component } from './senario6/second-child6/second-child6.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ParentComponent,
    ChildComponent,
    Parent4Component,
    Child4Component,
    Parent5Component,
    Child5Component,
    Grandchild5Component,
    Parent6Component,
    FirstChild6Component,
    SecondChild6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
