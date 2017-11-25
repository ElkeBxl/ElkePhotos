import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { Component } from '@angular/core';

describe('PhotoComponent', () => {
    let component: PhotoComponent;
    let fixture: ComponentFixture<PhotoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PhotoComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async(() => {
        expect(component).toBeTruthy();
    }));
  
    it('should render an img tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img')).toBeDefined();
    }));

    it('should have a required photo parameter', () => {
        component.photo = undefined;
        expect(function () {
            component.ngOnInit();
        }).toThrow();
    });
});
