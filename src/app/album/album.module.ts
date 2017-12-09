import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from '../album/album.component';
import { SharedModule } from '../shared/shared.module';
import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { JSONPhotoService } from '../photo.service.json';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        { provide: PHOTO_SERVICE_TOKEN, useClass: JSONPhotoService }
    ],
    declarations: [
        AlbumComponent
    ],
    exports: [
        AlbumComponent
    ]
})
export class AlbumModule { }
