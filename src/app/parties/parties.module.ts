import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiesComponent } from '../parties/parties.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [PartiesComponent]
})
export class PartiesModule { }
