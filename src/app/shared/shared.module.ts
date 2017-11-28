import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { LimitPipe } from './limit.pipe';
import { RotatingPhotosComponent } from './rotating-photos/rotating-photos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PhotoComponent, LimitPipe, RotatingPhotosComponent],
  declarations: [PhotoComponent, LimitPipe, RotatingPhotosComponent]
})
export class SharedModule { }
