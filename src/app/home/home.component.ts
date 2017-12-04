import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { MasonryOptions, AngularMasonry } from 'angular2-masonry';
import { MasonryModule } from 'angular2-masonry/src/module';
import { Renderer2 } from '@angular/core/src/render/api';

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
    
    bricks: string[] = [
        'photoshoots-background-1.jpg',
        'photoshoots-background-2.jpg',
        'photoshoots-background-3.jpg',
        'photoshoots-background-4.jpg',
        'photoshoots-background-5.jpg',
        'weddings-background-1.jpg',
        'weddings-background-2.jpg',
        'weddings-background-3.jpg',
        'weddings-background-4.jpg',
        'weddings-background-5.jpg',
        'parties-background-1.jpg',
        'parties-background-2.jpg',
        'parties-background-3.jpg',
        'parties-background-4.jpg'
    ];

    loadedBricks: string[] = [];

    public myOptions: MasonryOptions = { 
        transitionDuration: '0.8s',
        gutter: 10
    };

    constructor(private renderer: Renderer) { }

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
                img.src = 'assets/images/' + brick;
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

    public setBricks(bricks: string[]): void {
        this.bricks = bricks;
        this.randomize();
        this.reload();
    }

    private numberOfImagesLoaded: number = 0;
    onImageLoaded(brick: string): void {
        this.numberOfImagesLoaded++;
        if (this.numberOfImagesLoaded == this.bricks.length)
        {   
            this.loadedBricks = this.bricks;
            setTimeout(() => 
                this.renderer.setElementStyle(this.masonryPlaceholder.nativeElement, "opacity", "1"),
                250);
        }
    }
}
