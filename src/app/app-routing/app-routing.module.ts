import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Project365Component } from '../project365/project365.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { WeddingsComponent } from '../weddings/weddings.component';
import { PartiesComponent } from '../parties/parties.component';
import { PhotoshootsComponent } from '../photoshoots/photoshoots.component';
import { EventsComponent } from '../events/events.component';
import { ContactComponent } from '../contact/contact.component';
import { AlbumComponent } from '../album/album.component';
  
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
            { path: 'evenementen', redirectTo: 'events', pathMatch: 'full' },            
            { path: 'events', component: EventsComponent },        
            { path: 'photoshoots', component: PhotoshootsComponent },
            { path: 'fuiven', redirectTo: 'parties', pathMatch: 'full' },            
            { path: 'parties', component: PartiesComponent },
            { path: 'huwelijken', redirectTo: 'weddings', pathMatch: 'full' },            
            { path: 'weddings', component: WeddingsComponent },
            { path: 'project365', component: Project365Component },
            { path: 'contact', component: ContactComponent },            
            { path: 'home', component: HomeComponent },
            { path: 'album/:name', component: AlbumComponent, },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: HomeComponent }
        ];
    }
}
