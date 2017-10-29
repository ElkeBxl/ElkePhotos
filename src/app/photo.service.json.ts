import { IPhotoService } from "./photo.service";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Photo } from "./models/photo";
import { Project365Photo } from "./models/project365photo";

@Injectable()
export class JSONPhotoService implements IPhotoService {

    constructor(private http:Http) { }

    getAlbum(name: string): Photo[] {
        return [ new Photo("test") ];
    };

    getProject365(): Promise<Project365Photo[]> {
        return this.http.get('./assets/data/project365.json')
               .toPromise()
               .then(res => res.json() as Project365Photo[])
               .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}