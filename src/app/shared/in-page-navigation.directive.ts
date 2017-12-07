import { Directive, ViewChild, ElementRef } from '@angular/core';

@Directive({
    selector: '[inpagenavigation]'
})
export class InPageNavigationDirective {

    constructor(private pagenavigation: ElementRef) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        let elements = (<HTMLElement>this.pagenavigation.nativeElement).querySelectorAll('a');
        for(let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.onclick = (el) => { 
                this.removeAllActiveClasses();
                el.srcElement.parentElement.classList.add('active');
            };
        }
    }

    private removeAllActiveClasses(): void {
        let elements = (<HTMLElement>this.pagenavigation.nativeElement).querySelectorAll('a');
        for(let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.parentElement.classList.remove('active');
        }
    }

}
