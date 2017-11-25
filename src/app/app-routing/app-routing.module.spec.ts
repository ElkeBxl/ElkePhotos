import { AppRoutingModule } from './app-routing.module';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Project365Component } from '../project365/project365.component';
import { AppComponent } from '../app.component';
import { Project365Module } from '../project365/project365.module';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../home/home.component';
import { EventsComponent } from '../events/events.component';
import { PartiesModule } from '../parties/parties.module';
import { PhotoshootsModule } from '../photoshoots/photoshoots.module';
import { EventsModule } from '../events/events.module';
import { WeddingsModule } from '../weddings/weddings.module';
import { ContactModule } from '../contact/contact.module';

@Component({ selector: 'app-root', template: '<router-outlet></router-outlet>' })
class MockAppComponent { }

@Component({ selector: 'project365', template: '' })
class MockProject365Component { }

describe('AppRoutingModule', () => {
    let appRoutingModule: AppRoutingModule;
    let location: Location;
    let router: Router;
    let fixture;
  
    beforeEach(() => {
        appRoutingModule = new AppRoutingModule();

        TestBed.configureTestingModule({
        imports: [ 
            RouterTestingModule.withRoutes(AppRoutingModule.getRoutes()),
            Project365Module,
            HomeModule,
            EventsModule,
            PartiesModule,
            PhotoshootsModule,
            WeddingsModule,
            ContactModule
        ],
        declarations: [
            AppComponent
        ]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('should create an instance', () => {
        expect(appRoutingModule).toBeTruthy();
    });
  
    it('fakeAsync works', fakeAsync(() => {
        let promise = new Promise((resolve) => {
            setTimeout(resolve, 10)
        });
        let done = false;
        promise.then(() => done = true);
        tick(50);
        expect(done).toBeTruthy();
    }));
  
    it('navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate(['']).then((success) => {
            expect(location.path()).toBe('/home');
        });
    }));

    it('navigate to "project365" routes you to /project365', fakeAsync(() => {
        router.navigate(['project365']).then((success) => {
            expect(location.path()).toBe('/project365');
        });
    }));
    
    it('navigate to "huwelijken" routes you to /weddings', fakeAsync(() => {
        router.navigate(['huwelijken']).then((success) => {
            expect(location.path()).toBe('/weddings');
        });
    }));
    
    it('navigate to "weddings" routes you to /weddings', fakeAsync(() => {
        router.navigate(['weddings']).then((success) => {
            expect(location.path()).toBe('/weddings');
        });
    }));
    
    it('navigate to "fuiven" routes you to /parties', fakeAsync(() => {
        router.navigate(['fuiven']).then((success) => {
            expect(location.path()).toBe('/parties');
        });
    }));

    it('navigate to "parties" routes you to /parties', fakeAsync(() => {
        router.navigate(['parties']).then((success) => {
            expect(location.path()).toBe('/parties');
        });
    }));
    
    it('navigate to "photoshoots" routes you to /photoshoots', fakeAsync(() => {
        router.navigate(['photoshoots']).then((success) => {
            expect(location.path()).toBe('/photoshoots');
        });
    }));
    
    it('navigate to "evenementen" routes you to /events', fakeAsync(() => {
        router.navigate(['evenementen']).then((success) => {
            expect(location.path()).toBe('/events');
        });
    }));
    
    it('navigate to "events" routes you to /events', fakeAsync(() => {
        router.navigate(['events']).then((success) => {
            expect(location.path()).toBe('/events');
        });
    }));
});
