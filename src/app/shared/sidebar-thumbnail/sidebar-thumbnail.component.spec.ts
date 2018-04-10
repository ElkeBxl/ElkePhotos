import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarThumbnailComponent } from './sidebar-thumbnail.component';
import { GenericThumbnailComponent } from '../generic-thumbnail/generic-thumbnail.component';
import { SharedModule } from '../shared.module';
import { getDebugNode, DebugElement } from '@angular/core';

describe('SidebarThumbnailComponent', () => {
	let component: SidebarThumbnailComponent;
	let fixture: ComponentFixture<SidebarThumbnailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ SharedModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarThumbnailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should use internally a generic-thumbnail', () => {
		const compiled = fixture.debugElement.nativeElement;
		const element = compiled.querySelector('generic-thumbnail');
		expect(element === null).toBeFalsy();
	});

	it('should throw an error when giving invalid filename', () => {
		expect(function() {
			component.image = '';
		}).toThrowError();
	});

	it('should be able to set an image', () => {
		component.image = 'test.jpg';
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		const element = compiled.querySelector('generic-thumbnail');
		const nestedComponentDebugElement = <DebugElement>getDebugNode(element);
		const nestedComponentInstance: GenericThumbnailComponent = nestedComponentDebugElement.componentInstance;
		expect(nestedComponentInstance.contentStylings).toEqual({'background-image': 'url(test.jpg)'});
	});
});
