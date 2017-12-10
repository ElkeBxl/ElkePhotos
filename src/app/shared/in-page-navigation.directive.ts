import { Directive, ViewChild, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[inpagenavigation]'
})
export class InPageNavigationDirective {

    constructor(private pagenavigation: ElementRef, private renderer: Renderer) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        let elements = (<HTMLElement>this.pagenavigation.nativeElement).querySelectorAll('a');
        for(let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.onclick = (event) => { 
                event.preventDefault();
                this.removeAllActiveClasses();
                event.srcElement.parentElement.classList.add('active');
                let target = event.srcElement.attributes['href'].value;
                let targetElement = <HTMLElement>document.querySelector(target);
                window.scrollTo({ 
                    left: targetElement.clientLeft, 
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
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
