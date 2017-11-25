import { Component, OnInit, Inject } from '@angular/core';
import { Project365Photo } from '../models/project365photo';
import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { IPhotoService } from '../photo.service';

@Component({
  selector: 'project365',
  templateUrl: './project365.component.html',
  styleUrls: ['./project365.component.scss']
})
export class Project365Component implements OnInit {
    photos: Project365Photo[] = [];
    counter: number = 3;

    constructor(@Inject(PHOTO_SERVICE_TOKEN) private photoService: IPhotoService) { 
    }
    
    ngOnInit() {
        this.photoService.getProject365().then(res => this.photos = res);
    }
}
