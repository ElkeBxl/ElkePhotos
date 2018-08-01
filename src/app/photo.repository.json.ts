import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './models/album';
import { Photo } from './models/photo';
import { Project365Photo } from './models/project365photo';
import { IPhotoRepository } from './photo.repository';

interface Project365ItemsResponse {
	results: Project365Photo[];
}

interface AlbumResponse {
	results: Album[];
}

@Injectable()
export class JSONPhotoRepository implements IPhotoRepository {

	constructor(private http: HttpClient) { }

	getAlbum(name: string): Promise<Album> {
		if (!name) {
			throw new Error('No album name is given');
		}

		return this.http.get<Album[]>('./assets/data/albums.json')
				.toPromise()
				.then(res => {
					const album = res.find((a) => a.id === name);
					if (!album) {
						return this.handleError('Invalid album name is given');
					}
					album.photos = new Array<Photo>();
					for (let i = 1; i <= album.photosCount; i++) {
						album.photos.push(new Photo(i));
					}
					return album;
				})
				.catch(this.handleError);
	}

	getProject365(): Promise<Project365Photo[]> {
		return this.http.get<Project365ItemsResponse>('./assets/data/project365.json')
				.toPromise()
				.then(res => res)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
