import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { Project365RoutingModule } from './project365-routing.module';
import { Project365Component } from '../project365/project365.component';
import { Project365PhotoComponent } from './project365-photo/project365-photo.component';
import { PhotoService } from '../photo.service';

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
