import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MasonryModule } from 'angular2-masonry';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HomeComponent ],
            imports: [ SharedModule, MasonryModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
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

    it('should load added bricks', async(done) => {
        component.setBricks(["test1"]);
        setTimeout(() => {
            expect(component.loadedBricks.includes("test1")).toBeTruthy();
            done();
        },
        1000);
    });
});
