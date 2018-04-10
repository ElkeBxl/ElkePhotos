import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingPhotosComponent } from './rotating-photos.component';
import { currentId } from 'async_hooks';

describe('RotatingPhotosComponent', () => {
	let component: RotatingPhotosComponent;
	let fixture: ComponentFixture<RotatingPhotosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RotatingPhotosComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RotatingPhotosComponent);
		component = fixture.componentInstance;
		component.amount = 5;
		component.location = 'testfolder/test-';
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should allow setting a new interval', () => {
		const currentInterval: number = component.interval;
		component.interval = currentInterval + 1000;
		expect(component.interval).toEqual(currentInterval + 1000);
	});

	it('should not allow an invalid interval', () => {
		expect(function() {
			component.interval = 0;
		}).toThrowError();
	});

	it('should throw an error if less than 1 photo is set', () => {
		expect(function() {
			component.amount = 0;
		}).toThrowError();
	});

	it('should allow setting a new valid amount', () => {
		const oldAmount: number = component.amount;
		component.amount = 3;
		expect(component.amount).not.toEqual(oldAmount);
	});

	it('should start rotating photos as soon as a new interval is set', (done) => {
		const path: string = component.getBackgroundImage();
		component.interval = 1000;
		setTimeout(function() {
			expect(component.getBackgroundImage()).not.toEqual(path);
			done(); // call this to finish off the it block
		}, 1500);
	});
});
