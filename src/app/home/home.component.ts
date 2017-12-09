import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { MasonryOptions, AngularMasonry } from 'angular2-masonry';
import { MasonryModule } from 'angular2-masonry/src/module';
import { Renderer2 } from '@angular/core/src/render/api';
import { Router } from '@angular/router';

export class HomePhoto {
    public filename: string;
    public albumname: string;

    constructor(filename: string, albumname: string) {
        this.filename = filename;
        this.albumname = albumname;
    }
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {

    @ViewChild("masonryplaceholder", {read: ElementRef}) masonryPlaceholder: ElementRef;
    @ViewChild("preloader", {read: ElementRef}) preloader: ElementRef;
    
    bricks: HomePhoto[] = [
        new HomePhoto('photoshoots-background-1.jpg', 'photoshootpriyanka'),
        new HomePhoto('photoshoots-background-2.jpg', 'zwangerschapshootdelphi'),
        new HomePhoto('photoshoots-background-3.jpg', 'pasgeborenmattheo'),
        new HomePhoto('photoshoots-background-4.jpg', ''),
        new HomePhoto('photoshoots-background-5.jpg', ''),
        new HomePhoto('weddings-background-1.jpg', 'huwelijkevelyneeric'),
        new HomePhoto('weddings-background-2.jpg', 'burgerlijkhuwelijkevelynthibaud'),
        new HomePhoto('weddings-background-3.jpg', 'huwelijkevelynthibaud'),
        new HomePhoto('weddings-background-4.jpg', 'huwelijkdorienhannah'),
        new HomePhoto('weddings-background-5.jpg', 'huwelijkdorienhannah'),
        new HomePhoto('parties-background-1.jpg', 'duveltd2015'),
        new HomePhoto('parties-background-2.jpg', 'duveltd2016'),
        new HomePhoto('parties-background-3.jpg', 'horspistetd2017'),
        new HomePhoto('parties-background-4.jpg', 'cocktailnightvrg2017')
    ];

    loadedBricks: HomePhoto[] = [];

    public myOptions: MasonryOptions = { 
        transitionDuration: '0.8s',
        gutter: 10
    };

    constructor(private renderer: Renderer, private router: Router) { }

    ngOnInit() {
        this.randomize();
        this.reload();      
    }

    private reload(): void {
        this.bricks.forEach(brick => {
            if (!this.loadedBricks.includes(brick))
            {
                let img = new Image();
                img.onload = () => this.onImageLoaded(brick);
                img.src = 'assets/images/' + brick.filename;
            }
        });  
    }

    private getRandom(floor: number, ceiling: number): number {
        return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
    }

    private randomize(): void {
        for (let i = 0; i < this.bricks.length; i++) {
            const randomChoiceIndex = this.getRandom(i, this.bricks.length - 1);
            [this.bricks[i], this.bricks[randomChoiceIndex]] = [this.bricks[randomChoiceIndex], this.bricks[i]];
        }
    }

    public setBricks(bricks: HomePhoto[]): void {
        this.bricks = bricks;
        this.randomize();
        this.reload();
    }

    private numberOfImagesLoaded: number = 0;
    onImageLoaded(brick: HomePhoto): void {
        this.numberOfImagesLoaded++;
        if (this.numberOfImagesLoaded == this.bricks.length)
        {   
            this.loadedBricks = this.bricks;
            setTimeout(() => 
                this.renderer.setElementStyle(this.masonryPlaceholder.nativeElement, "opacity", "1"),
                250);
        }
    }

    public openAlbum(albumname: string): void {
        if (albumname && albumname.length > 0) {
            this.router.navigate(['album', albumname]);
        }
    }
}
