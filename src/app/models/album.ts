import { Photo } from './photo';

export class Album {
	id: string;
	title: string;
	photosCount: number;
	folder: string;
	category: string;
	thumbnail: number;
	password: string;
	hidden = false;
	highquality = false;
	photos: Photo[];

	constructor(id: string) {
		this.id = id;
	}
}
