import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parties',
    templateUrl: './parties.component.html',
    styleUrls: [
        './parties.component.scss'
    ]
})
export class PartiesComponent implements OnInit {

    pageTitle: string = 'Fuiven';

    constructor() {
    }

    ngOnInit() {
    }

}
