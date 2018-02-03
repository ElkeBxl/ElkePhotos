import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { Project365Module } from '../project365/project365.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        Project365Module
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }
