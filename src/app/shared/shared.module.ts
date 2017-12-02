import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { LimitPipe } from './limit.pipe';
import { RotatingPhotosComponent } from './rotating-photos/rotating-photos.component';
import { GenericThumbnailComponent } from './generic-thumbnail/generic-thumbnail.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
    ],
    exports: [
        LimitPipe, 
        PhotoComponent, 
        RotatingPhotosComponent,
        SidebarThumbnailComponent,
        NgbModule
    ],
    declarations: [
        LimitPipe, 
        PhotoComponent, 
        RotatingPhotosComponent, 
        GenericThumbnailComponent, 
        SidebarThumbnailComponent
    ]
})
export class SharedModule { }
