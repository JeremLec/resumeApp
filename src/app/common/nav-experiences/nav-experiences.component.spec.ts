import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavExperiencesComponent } from './nav-experiences.component';

describe('NavExperiencesComponent', () => {
  let component: NavExperiencesComponent;
  let fixture: ComponentFixture<NavExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavExperiencesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
