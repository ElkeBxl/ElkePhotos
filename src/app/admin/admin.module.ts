import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { Project365PhotoComponent } from './project365-photo/project365-photo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		FormsModule
	],
	declarations: [AdminComponent, Project365PhotoComponent]
})
export class AdminModule { }
