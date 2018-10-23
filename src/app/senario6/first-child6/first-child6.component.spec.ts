import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChild6Component } from './first-child6.component';

describe('FirstChild6Component', () => {
  let component: FirstChild6Component;
  let fixture: ComponentFixture<FirstChild6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstChild6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChild6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
