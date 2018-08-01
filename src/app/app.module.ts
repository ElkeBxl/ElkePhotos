import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localenlBE from '@angular/common/locales/nl-BE';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AlbumModule } from './album/album.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { EventsModule } from './events/events.module';
import { HomeModule } from './home/home.module';
import { PartiesModule } from './parties/parties.module';
import { PhotoshootsModule } from './photoshoots/photoshoots.module';
import { Project365Module } from './project365/project365.module';
import { SharedModule } from './shared/shared.module';
import { WeddingsModule } from './weddings/weddings.module';


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
