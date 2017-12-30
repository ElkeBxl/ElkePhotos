import { InPageNavigationDirective } from './in-page-navigation.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `<ul inpagenavigation><li><a href="#">Test1</a></li></ul>`
})
class TestInPageNavigationComponent {
}

describe('InPageNavigationDirective', () => {

    let component: TestInPageNavigationComponent;
    let fixture: ComponentFixture<TestInPageNavigationComponent>;
    let listEl: DebugElement;

    it('should create an instance', () => {
        const directive = new InPageNavigationDirective(null, null);
        expect(directive).toBeTruthy();
    });

/*     it('should add onclick events', () => {
        TestBed.configureTestingModule({
            declarations: [TestInPageNavigationComponent, InPageNavigationDirective]
        });
        fixture = TestBed.createComponent(TestInPageNavigationComponent);
        component = fixture.componentInstance;
        listEl = fixture.debugElement.query(By.directive(InPageNavigationDirective));
        listEl.children.forEach((liElement) => { 
            liElement.children.forEach((aElement) => {
                //(<HTMLElement>(aElement.nativeElement)).click();
                aElement.triggerEventHandler('click', null);
                //console.log(aElement.parent);
            });
            //console.log(liElement);
            //waits(100);
            fixture.detectChanges();
            console.log(fixture.debugElement.query(By.css('li')));
            //expect((<HTMLElement>(liElement.nativeElement)).classList.length).toEqual(1);
        });
    }); */
});
