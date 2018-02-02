import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from '../album/album.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoService } from '../photo.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        AlbumComponent
    ],
    exports: [
        AlbumComponent
    ]
})
export class AlbumModule { }
