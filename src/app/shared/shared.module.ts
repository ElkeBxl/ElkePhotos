import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { LimitPipe } from './limit.pipe';
import { RotatingPhotosComponent } from './rotating-photos/rotating-photos.component';
import { GenericThumbnailComponent } from './generic-thumbnail/generic-thumbnail.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InPageNavigationDirective } from './in-page-navigation.directive';
import { MasonryModule } from 'angular2-masonry';
import { RouterLink } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    imports: [        
        CommonModule,
        NgbModule.forRoot(),
        MasonryModule,
        AngularFontAwesomeModule
    ],
    exports: [
        NgbModule,
        LimitPipe, 
        PhotoComponent, 
        RotatingPhotosComponent,
        SidebarThumbnailComponent,
        InPageNavigationDirective,
        MasonryModule,
        AngularFontAwesomeModule
    ],
    declarations: [
        LimitPipe, 
        PhotoComponent, 
        RotatingPhotosComponent, 
        GenericThumbnailComponent, 
        SidebarThumbnailComponent, 
        InPageNavigationDirective
    ]
})
export class SharedModule { }
