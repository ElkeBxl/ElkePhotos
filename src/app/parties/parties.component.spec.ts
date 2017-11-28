import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesComponent } from './parties.component';
import { SharedModule } from '../shared/shared.module';

describe('PartiesComponent', () => {
    let component: PartiesComponent;
    let fixture: ComponentFixture<PartiesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PartiesComponent ],
            imports: [ SharedModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PartiesComponent);
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
