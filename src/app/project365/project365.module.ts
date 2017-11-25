import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { Project365RoutingModule } from './project365-routing.module';
import { Project365Component } from '../project365/project365.component';
import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { JSONPhotoService } from '../photo.service.json';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Project365RoutingModule
  ],
  providers: [
      { provide: PHOTO_SERVICE_TOKEN, useClass: JSONPhotoService }
  ],
  declarations: [Project365Component],
  exports: [Project365Component]
})
export class Project365Module { }
