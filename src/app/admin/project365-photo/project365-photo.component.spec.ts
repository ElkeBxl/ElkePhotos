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
});
