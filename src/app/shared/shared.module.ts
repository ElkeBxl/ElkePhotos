import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { LimitPipe } from './limit.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PhotoComponent, LimitPipe],
  declarations: [PhotoComponent, LimitPipe]
})
export class SharedModule { }
