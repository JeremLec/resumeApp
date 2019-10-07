import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent } from './formation.component';

describe('FormationComponent', () => {
  let component: FormationComponent;
  let fixture: ComponentFixture<FormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
