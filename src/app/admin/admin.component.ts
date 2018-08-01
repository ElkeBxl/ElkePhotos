import { Component, Inject, OnInit } from '@angular/core';
import { Project365Photo } from '../models/project365photo';
import { IPhotoService } from '../services/photo.service';
import { PHOTO_SERVICE_TOKEN } from '../services/photo.service.token';

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
			photos => this.project365photos = photos
		).catch(reason => console.log(reason));
	}

}
