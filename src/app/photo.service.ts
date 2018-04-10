import { Injectable, Inject } from '@angular/core';

import { JSONPhotoRepository } from './photo.repository.json';
import { LocalPhotoRepository } from './photo.repository.local';
import { APIPhotoRepository } from './photo.repository.api';
import { PHOTO_REPOSITORY_TOKEN } from './photo.repository.token';
import { Project365Photo } from './models/project365photo';
import { Album } from './models/album';
import { IPhotoRepository } from './photo.repository';

export interface IPhotoService {
	getAlbum(name: string): Promise<Album>;
	getProject365(): Promise<Project365Photo[]>;
}

@Injectable()
export class PhotoService implements IPhotoService {

	constructor(@Inject(PHOTO_REPOSITORY_TOKEN) private repository: IPhotoRepository) { }

	getAlbum(name: string): Promise<Album> {
		return this.repository.getAlbum(name);
	}
	getProject365(): Promise<Project365Photo[]> {
		return this.repository.getProject365();
	}

}
