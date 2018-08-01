import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WeddingsComponent } from './weddings.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [ WeddingsComponent ]
})
export class WeddingsModule { }
