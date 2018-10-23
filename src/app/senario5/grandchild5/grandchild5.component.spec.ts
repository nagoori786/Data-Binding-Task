import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandchild5Component } from './grandchild5.component';

describe('Grandchild5Component', () => {
  let component: Grandchild5Component;
  let fixture: ComponentFixture<Grandchild5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandchild5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandchild5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
