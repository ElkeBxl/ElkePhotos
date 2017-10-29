import { Component, Inject, OnInit } from '@angular/core';
import { IPhotoService } from './photo.service';
import { PHOTO_SERVICE_TOKEN } from './photo.service.token';
import { Photo } from './models/photo';
import { Project365Photo } from './models/project365photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Elke.photos portfolio';
    photos: Project365Photo[] = [];

  constructor(@Inject(PHOTO_SERVICE_TOKEN) private photoService: IPhotoService) { }

  ngOnInit(): void {
    this.photoService.getProject365().then(res => this.photos = res);
  }
}
