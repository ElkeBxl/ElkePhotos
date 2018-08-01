import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasonryModule } from 'angular2-masonry';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		MasonryModule
	],
	declarations: [ HomeComponent ]
})
export class HomeModule { }
