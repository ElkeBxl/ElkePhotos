import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-weddings',
    templateUrl: './weddings.component.html',
    styleUrls: [
        './weddings.component.scss'
    ]
})
export class WeddingsComponent implements OnInit {

    @ViewChild("pagenavigation") private pagenavigation: ElementRef;

    constructor() { }

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
