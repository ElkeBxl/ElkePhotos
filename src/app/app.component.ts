import { Component, Inject } from '@angular/core';
import { IPhotoService } from './photo.service';
import { PHOTO_SERVICE_TOKEN } from './photo.service.token';
import { Photo } from './models/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Elke.photos portfolio';
    photos: Photo[] = [];

  constructor(@Inject(PHOTO_SERVICE_TOKEN) private photoService: IPhotoService) { }

  getPhotos(): Photo[] {
     return this.photoService.getAlbum("test");
  }
}
