import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Project365Component } from '../project365/project365.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
  
@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutingModule.getRoutes(), { useHash: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { 
    public static getRoutes(): Routes {
        return [
            { path: 'project365', component: Project365Component },
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: AppComponent }
          ];
    }
}
