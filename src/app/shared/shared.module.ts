import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { LimitPipe } from './limit.pipe';
import { RotatingPhotosComponent } from './rotating-photos/rotating-photos.component';
import { GenericThumbnailComponent } from './generic-thumbnail/generic-thumbnail.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InPageNavigationDirective } from './in-page-navigation.directive';
import { MasonryModule } from 'angular2-masonry';
import { RouterLink } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PhotoService } from '../photo.service';
import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { PHOTO_REPOSITORY_TOKEN } from '../photo.repository.token';
import { JSONPhotoRepository } from '../photo.repository.json';
import { APIPhotoRepository } from '../photo.repository.api';
import { environment } from '../../environments/environment';

@NgModule({
	imports: [
		CommonModule,
		NgbModule.forRoot(),
		MasonryModule,
		AngularFontAwesomeModule
	],
	exports: [
		NgbModule,
		LimitPipe,
		PhotoComponent,
		RotatingPhotosComponent,
		SidebarThumbnailComponent,
		InPageNavigationDirective,
		MasonryModule,
		AngularFontAwesomeModule
	],
	providers: [
		{ provide: PHOTO_SERVICE_TOKEN, useClass: PhotoService },
		{ provide: PHOTO_REPOSITORY_TOKEN, useClass: (environment.production ? JSONPhotoRepository : APIPhotoRepository) }
	],
	declarations: [
		LimitPipe,
		PhotoComponent,
		RotatingPhotosComponent,
		GenericThumbnailComponent,
		SidebarThumbnailComponent,
		InPageNavigationDirective
	]
})
export class SharedModule { }
