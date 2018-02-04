import { Component, OnInit, Input } from '@angular/core';
import { Project365Photo } from '../../models/project365photo';

@Component({
    selector: 'project365-photo',
    templateUrl: './project365-photo.component.html',
    styleUrls: ['./project365-photo.component.scss']
})
export class Project365PhotoComponent implements OnInit {

    @Input('photo') photo: Project365Photo;
    
    constructor() { }

    ngOnInit() {
    }

}
