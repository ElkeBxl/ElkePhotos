import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MasonryModule } from 'angular2-masonry';
import { environment } from '../../environments/environment';
import { JSONPhotoRepository } from '../services/photo.repository.json';
import { LocalPhotoRepository } from '../services/photo.repository.local';
import { PHOTO_REPOSITORY_TOKEN } from '../services/photo.repository.token';
import { PhotoService } from '../services/photo.service';
import { PHOTO_SERVICE_TOKEN } from '../services/photo.service.token';
import { GenericThumbnailComponent } from './generic-thumbnail/generic-thumbnail.component';
import { InPageNavigationDirective } from './in-page-navigation.directive';
import { LimitPipe } from './limit.pipe';
import { PhotoComponent } from './photo/photo.component';
import { RotatingPhotosComponent } from './rotating-photos/rotating-photos.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';

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
		GenericThumbnailComponent,
		SidebarThumbnailComponent,
		InPageNavigationDirective,
		MasonryModule,
		AngularFontAwesomeModule
	],
	providers: [
		{ provide: PHOTO_SERVICE_TOKEN, useClass: PhotoService },
		{ provide: PHOTO_REPOSITORY_TOKEN, useClass: (environment.production ? JSONPhotoRepository : LocalPhotoRepository) }
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
