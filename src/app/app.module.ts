import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JSONPhotoService } from './photo.service.json';
import { PHOTO_SERVICE_TOKEN } from './photo.service.token';
import { SharedModule } from './shared/shared.module';
import { Project365Module } from './project365/project365.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		SharedModule,
		Project365Module
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
