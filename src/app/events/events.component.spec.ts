import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module';

describe('EventsComponent', () => {
	let component: EventsComponent;
	let fixture: ComponentFixture<EventsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EventsComponent ],
			imports: [ SharedModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EventsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render a h2 tag', () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h2') === null).toBeFalsy();
	});
});
