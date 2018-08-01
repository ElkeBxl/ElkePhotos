import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [ContactComponent]
})
export class ContactModule { }
