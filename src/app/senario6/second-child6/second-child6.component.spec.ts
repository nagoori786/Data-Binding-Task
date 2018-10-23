import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild6Component } from './second-child6.component';

describe('SecondChild6Component', () => {
  let component: SecondChild6Component;
  let fixture: ComponentFixture<SecondChild6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChild6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChild6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
