import { IPhotoRepository } from './photo.repository';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Photo } from './models/photo';
import { Project365Photo } from './models/project365photo';
import { HttpClient } from '@angular/common/http';
import { Album } from './models/album';

interface Project365ItemsResponse {
	results: Project365Photo[];
}

interface AlbumResponse {
	results: Album[];
}

@Injectable()
export class LocalPhotoRepository implements IPhotoRepository {

	constructor(private http: HttpClient) { }

	getAlbum(name: string): Promise<Album> {
		if (!name) {
			throw new Error('No album name is given');
		}

		return new Promise<Album>((resolve, reject) => {
			const album = new Album('doel');
			album.title = 'Doel';
			album.photosCount = 30;
			album.folder = '20170605-doel';
			album.category = 'other';
			album.thumbnail = 1;
			album.password = '';
			album.hidden = false;
			album.highquality = false;
			album.photos = new Array<Photo>();
			for (let i = 1; i <= 37; i++) {
				album.photos.push(new Photo(i));
			}
			resolve(album);
		});
	}

	getProject365(): Promise<Project365Photo[]> {
		return new Promise<Project365Photo[]>((resolve, reject) => {
			resolve(Array.from(Array(30).keys()).map(n => {
				n++; // To avoid counting from day 0
				const photo = new Project365Photo(n);
				photo.projectday = n;
				photo.day = n;
				photo.month = 11;
				photo.year = 2015;
				photo.description = 'Photo description ' + n;
				photo.exposure = '1/' + n;
				photo.aperture = 'f/' + n;
				photo.focallength = n;
				photo.fisheye = false;
				photo.iso = n * 100;
				return photo;
			}));
		});
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
