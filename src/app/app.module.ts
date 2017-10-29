import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { JSONPhotoService } from './photo.service.json';
import { PHOTO_SERVICE_TOKEN } from './photo.service.token';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [{ provide: PHOTO_SERVICE_TOKEN, useClass: JSONPhotoService }],
	bootstrap: [AppComponent]
})
export class AppModule { }
