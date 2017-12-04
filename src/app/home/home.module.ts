import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MasonryModule
    ],
    declarations: [ HomeComponent ]
})
export class HomeModule { }
