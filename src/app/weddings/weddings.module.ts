import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingsComponent } from '../weddings/weddings.component';
import { SharedModule } from '../shared/shared.module';
import { RotatingPhotosComponent } from '../shared/rotating-photos/rotating-photos.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ WeddingsComponent ]
})
export class WeddingsModule { }
