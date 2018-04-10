import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Project365Module } from './project365/project365.module';
import { HttpClientModule } from '@angular/common/http';
import { Project365Component } from './project365/project365.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeModule } from './home/home.module';
import { registerLocaleData } from '@angular/common';

import localenlBE from '@angular/common/locales/nl-BE';
import { WeddingsModule } from './weddings/weddings.module';
import { EventsModule } from './events/events.module';
import { PartiesModule } from './parties/parties.module';
import { PhotoshootsModule } from './photoshoots/photoshoots.module';
import { ContactModule } from './contact/contact.module';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { AlbumModule } from './album/album.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PhotoService } from './photo.service';
import { AdminModule } from './admin/admin.module';
registerLocaleData(localenlBE);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		SharedModule,
		Project365Module,
		HomeModule,
		AppRoutingModule,
		WeddingsModule,
		EventsModule,
		PartiesModule,
		PhotoshootsModule,
		ContactModule,
		AlbumModule,
		AdminModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue : '/' },
		{ provide: LOCALE_ID, useValue: 'nl-be' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
