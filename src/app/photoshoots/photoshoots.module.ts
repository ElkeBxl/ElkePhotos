import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoshootsComponent } from '../photoshoots/photoshoots.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [PhotoshootsComponent]
})
export class PhotoshootsModule { }
