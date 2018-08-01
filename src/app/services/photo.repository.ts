import { Album } from '../models/album';
import { Project365Photo } from '../models/project365photo';

export interface IPhotoRepository {
	getAlbum(name: string): Promise<Album>;
	getProject365(): Promise<Project365Photo[]>;
}
