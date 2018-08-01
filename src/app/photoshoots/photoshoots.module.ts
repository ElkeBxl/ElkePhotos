import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PhotoshootsComponent } from './photoshoots.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [PhotoshootsComponent]
})
export class PhotoshootsModule { }
