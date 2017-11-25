import { IPhotoService } from "./photo.service";
import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Photo } from "./models/photo";
import { Project365Photo } from "./models/project365photo";
import { HttpClient } from "@angular/common/http";

interface Project365ItemsResponse {
    results: Project365Photo[];
}

interface PhotoItemsResponse {
    results: Photo[];
}

@Injectable()
export class JSONPhotoService implements IPhotoService {

    constructor(private http:HttpClient) { }

    getAlbum(name: string): Promise<Photo[]> {
        if (!name) {
            throw new Error('No album name is given'); 
        }

        return this.http.get<PhotoItemsResponse>('')
               .toPromise()
               .then(res => res)
               .catch(this.handleError);
    };

    getProject365(): Promise<Project365Photo[]> {
        return this.http.get<Project365ItemsResponse>('./assets/data/project365.json')
               .toPromise()
               .then(res => res)
               .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}