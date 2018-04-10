import { Directive, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Directive({
	selector: '[appInPageNavigation]'
})
export class InPageNavigationDirective implements AfterViewInit {

	constructor(private pagenavigation: ElementRef, private renderer: Renderer) { }

	ngAfterViewInit() {
		const elements = (<HTMLElement>this.pagenavigation.nativeElement).querySelectorAll('a');
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			element.onclick = (event) => {
				event.preventDefault();
				this.removeAllActiveClasses();
				event.srcElement.parentElement.classList.add('active');
				const target = event.srcElement.attributes['href'].value;
				const targetElement = <HTMLElement>document.querySelector(target);
				window.scrollTo({
					left: targetElement.clientLeft,
					top: targetElement.offsetTop,
					behavior: 'smooth'
				});
			};
		}
	}

	private removeAllActiveClasses(): void {
		const elements = (<HTMLElement>this.pagenavigation.nativeElement).querySelectorAll('a');
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			element.parentElement.classList.remove('active');
		}
	}
}
