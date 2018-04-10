import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingsComponent } from './weddings.component';
import { SharedModule } from '../shared/shared.module';

describe('WeddingsComponent', () => {
	let component: WeddingsComponent;
	let fixture: ComponentFixture<WeddingsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WeddingsComponent ],
			imports: [ SharedModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeddingsComponent);
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
