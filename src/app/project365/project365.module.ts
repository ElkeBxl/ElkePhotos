import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { Project365RoutingModule } from './project365-routing.module';
import { Project365Component } from '../project365/project365.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Project365RoutingModule
  ],
  declarations: [Project365Component]
})
export class Project365Module { }
