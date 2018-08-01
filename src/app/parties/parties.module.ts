import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PartiesComponent } from './parties.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [PartiesComponent]
})
export class PartiesModule { }
