import { Injectable } from "@angular/core";
import { Project365Photo } from "./models/project365photo";
import { Photo } from "./models/photo";

export interface IPhotoService {
    getAlbum(name: string): Promise<Photo[]>;
    getProject365(): Promise<Project365Photo[]>;
}