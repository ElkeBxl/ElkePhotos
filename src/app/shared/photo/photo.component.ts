import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
    @Input() photo: Photo;
    
    constructor() { 
        this.photo = new Photo(0);
    }

    ngOnInit() {
        if (!this.photo) {
            throw new Error('Photo is required');
        }
    }
}
