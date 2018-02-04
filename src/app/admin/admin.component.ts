import { Component, OnInit, Inject } from '@angular/core';
import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { IPhotoService } from '../photo.service';
import { Project365Photo } from '../models/project365photo';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    public project365photos: Project365Photo[] = [];

    constructor(@Inject(PHOTO_SERVICE_TOKEN) private photoService: IPhotoService) { }

    ngOnInit() {
        this.photoService.getProject365().then(
            (photos) => this.project365photos = photos
        ).catch((reason) => console.log(reason));
    }

}
