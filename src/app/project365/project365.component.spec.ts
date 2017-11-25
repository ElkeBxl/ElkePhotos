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

  it('should render a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1') === null).toBeFalsy();
  }));
});
