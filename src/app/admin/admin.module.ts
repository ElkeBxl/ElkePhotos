import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { Project365PhotoComponent } from './project365-photo/project365-photo.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		FormsModule
	],
	declarations: [AdminComponent, Project365PhotoComponent]
})
export class AdminModule { }
