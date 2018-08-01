import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AlbumComponent } from './album.component';

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
