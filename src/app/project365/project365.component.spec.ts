import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project365Component } from './project365.component';

describe('Project365Component', () => {
  let component: Project365Component;
  let fixture: ComponentFixture<Project365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
