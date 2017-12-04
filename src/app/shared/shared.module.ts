import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { LimitPipe } from './limit.pipe';
import { RotatingPhotosComponent } from './rotating-photos/rotating-photos.component';
import { GenericThumbnailComponent } from './generic-thumbnail/generic-thumbnail.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [        
        CommonModule,
        NgbModule.forRoot()
    ],
    exports: [
        NgbModule,
        LimitPipe, 
        PhotoComponent, 
        RotatingPhotosComponent,
        SidebarThumbnailComponent
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
