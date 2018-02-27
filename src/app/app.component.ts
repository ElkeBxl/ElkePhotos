import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Elke.photos portfolio';

    @ViewChild("navigation") private navigationElementRef: ElementRef;
    @ViewChild("hamburgermenu") private hamburgerMenuElementRef: ElementRef;

    public hamburgerMenuVisible: boolean = false;

    ngOnInit(): void {
    }

    public toggleNavigation(): void {
        let element = (<HTMLElement>this.navigationElementRef.nativeElement);
        if (element.getAttribute("hidden")) {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden","true");
        }
    }

    public toggleHamburgerMenu($event: Event): void {
        this.hamburgerMenuVisible = !this.hamburgerMenuVisible;
        $event.stopPropagation();
    }    

    // We want to hide the menu as soon as someone clicks outside of it
    @HostListener('document:click', ['$event']) clickedOutside($event: Event) {
        if (this.hamburgerMenuVisible) {
            this.hamburgerMenuVisible = false;
        }
    }
}
