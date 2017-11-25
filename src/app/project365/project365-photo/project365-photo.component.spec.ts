import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project365PhotoComponent } from './project365-photo.component';
import { Project365Photo } from '../../models/project365photo';

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

    it('should generate a correct project365 photo URL', () => {
        component.photo = new Project365Photo('test');
        component.photo.day = 1;
        component.photo.month = 10;
        component.photo.year = 2017;
        
        expect(component.generatePhotoURL()).toBe('assets/images/365/20171001.jpg');
    });
});
