import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { LimitPipe } from './limit.pipe';
import { RotatingPhotosComponent } from './rotating-photos/rotating-photos.component';
import { GenericThumbnailComponent } from './generic-thumbnail/generic-thumbnail.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        LimitPipe, 
        PhotoComponent, 
        RotatingPhotosComponent,
        GenericThumbnailComponent
    ],
    declarations: [
        LimitPipe, 
        PhotoComponent, 
        RotatingPhotosComponent, 
        GenericThumbnailComponent
    ]
})
export class SharedModule { }
