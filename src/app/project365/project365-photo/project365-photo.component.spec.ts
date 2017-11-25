import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project365PhotoComponent } from './project365-photo.component';

describe('Project365PhotoComponent', () => {
    let component: Project365PhotoComponent;
    let fixture: ComponentFixture<Project365PhotoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Project365PhotoComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Project365PhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
  
    it('should render an img tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img')).not.toBe(null);
    }));
    
    it('should have a required photo parameter', () => {
        component.photo = undefined;
        expect(function () {
            component.ngOnInit();
        }).toThrow();
    });
});
