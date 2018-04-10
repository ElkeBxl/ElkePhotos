import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';

describe('ContactComponent', () => {
	let component: ContactComponent;
	let fixture: ComponentFixture<ContactComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContactComponent ],
			imports: [ SharedModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactComponent);
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
