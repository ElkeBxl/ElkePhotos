import { Component, OnInit, Inject, Input, Renderer, ElementRef, ViewChild } from '@angular/core';
import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { IPhotoService } from '../photo.service';
import { Photo } from '../models/photo';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album';
import { MasonryOptions } from 'angular2-masonry';

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

    public album: Album;
    public name: string;
    public message: string;

    @ViewChild("masonryplaceholder", {read: ElementRef}) masonryPlaceholder: ElementRef;
    @ViewChild("preloader", {read: ElementRef}) preloader: ElementRef;

    loadedBricks: Photo[] = [];

    public myOptions: MasonryOptions = { 
        transitionDuration: '0.8s',
        gutter: 10
    };

    constructor(@Inject(PHOTO_SERVICE_TOKEN) private photoService: IPhotoService, 
                private route: ActivatedRoute,
                private renderer: Renderer) { 
        this.route.params.subscribe(params => {
            this.name = params['name'];
            this.photoService.getAlbum(this.name).then((album) => {
                this.album = album;
                this.album.photos.forEach((brick) => {
                    if (!this.loadedBricks.includes(brick))
                    {
                        let img = new Image();
                        img.onload = () => this.onImageLoaded(brick);
                        img.src = this.getUrl(brick);
                    }
                });
            }).catch((reason) => this.message = reason);
        });
    }

    ngOnInit() {
    }

    public getUrl(photo: Photo): string {
        return "assets/images/albums/" + this.album.folder + "/" + this.pad(photo.id, 3) + ".jpg";
    }
    
    private pad(num: number, size: number): string {
        let s = num + '';
        while (s.length < size) s = '0' + s;
        return s;
    }

    private numberOfImagesLoaded: number = 0;
    onImageLoaded(brick: Photo): void {
        this.numberOfImagesLoaded++;
        if (this.numberOfImagesLoaded == this.album.photos.length)
        {   
            this.loadedBricks = this.album.photos;
            setTimeout(() => 
                this.renderer.setElementStyle(this.masonryPlaceholder.nativeElement, "opacity", "1"),
                250);
        }
    }
}
