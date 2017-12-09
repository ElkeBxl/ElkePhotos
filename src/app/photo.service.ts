import { Injectable } from "@angular/core";
import { Project365Photo } from "./models/project365photo";
import { Photo } from "./models/photo";
import { Album } from "./models/album";

export interface IPhotoService {
    getAlbum(name: string): Promise<Album>;
    getProject365(): Promise<Project365Photo[]>;
}