import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EventsComponent } from './events.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [EventsComponent]
})
export class EventsModule { }
