import { IPhotoService } from "./photo.service";
import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Photo } from "./models/photo";
import { Project365Photo } from "./models/project365photo";
import { HttpClient } from "@angular/common/http";
import { Album } from "./models/album";

interface Project365ItemsResponse {
    results: Project365Photo[];
}

interface AlbumResponse {
    results: Album[];
}

@Injectable()
export class APIPhotoService implements IPhotoService {

    private url:string = "http://localhost:8100/api/v1/photos";

    constructor(private http:HttpClient) { }

    getAlbum(name: string): Promise<Album> {
        if (!name) {
            throw new Error('No album name is given'); 
        }

        return this.http.get<Album[]>(this.url)
               .toPromise()
               .then(res => {
                   let album = res.find((album) => album.id == name);
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
    };

    getProject365(): Promise<Project365Photo[]> {
        return this.http.get<Project365ItemsResponse>(this.url)
               .toPromise()
               .then(res => res)
               .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}