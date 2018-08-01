import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { SharedModule } from '../shared/shared.module';
import { Project365PhotoComponent } from './project365-photo/project365-photo.component';
import { Project365RoutingModule } from './project365-routing.module';
import { Project365Component } from './project365.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		Project365RoutingModule
	],
	providers: [
		PhotoService
	],
	declarations: [Project365Component, Project365PhotoComponent],
	exports: [Project365Component]
})
export class Project365Module { }
