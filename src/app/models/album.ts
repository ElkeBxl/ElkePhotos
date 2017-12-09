import { Photo } from "./photo";

export class Album {
    id: string;
    title: string;
    photosCount: number;
    folder: string;
    category: string;
    thumbnail: number;
    password: string;
    hidden: boolean = false;
    highquality: boolean = false;
    photos: Photo[];

    constructor(id: string) {
        this.id = id;
    }
}