import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericThumbnailComponent } from './generic-thumbnail.component';

describe('GenericThumbnailComponent', () => {
    let component: GenericThumbnailComponent;
    let fixture: ComponentFixture<GenericThumbnailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GenericThumbnailComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GenericThumbnailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('can have custom generic stylings', () => {
        component.genericStylings = { 'color': 'red' };
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        let element = compiled.querySelector('div');
        expect(element === null).toBeFalsy();
        expect(window.getComputedStyle(element, null).getPropertyValue('color')).toEqual('rgb(255, 0, 0)');
    });

    it('can have custom content stylings', () => {
        component.contentStylings = { 'color': 'red' };
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        let element = compiled.querySelector('div span');
        expect(element === null).toBeFalsy();
        expect(window.getComputedStyle(element, null).getPropertyValue('color')).toEqual('rgb(255, 0, 0)');
    });

    it('can have custom classes', () => {
        component.classes = ['col-xs-6'];
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        let element = compiled.querySelector('div');
        expect(element === null).toBeFalsy();
        const nodeAttributes = element.attributes as NamedNodeMap;
        expect(nodeAttributes.getNamedItem('class').value).toEqual('col-xs-6');
    });
});
