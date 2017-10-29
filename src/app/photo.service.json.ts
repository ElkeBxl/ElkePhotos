import { IPhotoService } from "./photo.service";
import { Injectable } from "@angular/core";
import { Photo } from "./models/photo";
import { Project365Photo } from "./models/project365photo";

@Injectable()
export class JSONPhotoService implements IPhotoService {
    getAlbum(name: string): Photo[] {
        return [ new Photo("test") ];
    };
    getProject365(): Project365Photo[] {
        return null;
    };
}