import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project365Module } from './project365.module';
import { Project365Component } from './project365.component';
// import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { SharedModule } from '../shared/shared.module';
// import { JSONPhotoRepository } from '../photo.service.json';
import { Project365Photo } from '../models/project365photo';
import { IPhotoService } from '../photo.service';
import { Photo } from '../models/photo';
import { Project365PhotoComponent } from './project365-photo/project365-photo.component';
import { LimitPipe } from '../shared/limit.pipe';
import { Album } from '../models/album';
import { Project365RoutingModule } from './project365-routing.module';

// We mock a PhotoService to avoid any dependencies on stuff 
// like HttpClient (as is the case in JSONPhotoService)
class MockPhotoService implements IPhotoService {
    getProject365(): Promise<Project365Photo[]> {
        return new Promise(() => new Array<Project365Photo>());
    }
    getAlbum(): Promise<Album> {
        return new Promise(() => new Album('testAlbum'));
    }
}

describe('Project365Component', () => {
    let component: Project365Component;
    let fixture: ComponentFixture<Project365Component>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Project365Component, Project365PhotoComponent],
            imports: [ SharedModule, Project365RoutingModule ]
        });

        TestBed.overrideComponent(Project365Component, {
            set: {
                providers: [
                    MockPhotoService
                ]
            }
        });

        fixture = TestBed.createComponent(Project365Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a h2 tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2') === null).toBeFalsy();
    });
    
    it('should show more photos when showMore() is called', () => {
        component.photos = new Array<Project365Photo>();
        component.photos.push(new Project365Photo(1, 'photo 1'));
        component.photos.push(new Project365Photo(2, 'photo 2'));
        component.photos.push(new Project365Photo(3, 'photo 3'));

        component.counter = 0;
        component.showMore(1);
        component.showMore(1);

        expect(component.counter).toBe(2);
    });
    
    it('should not overreach the photos shown when showMore() is called too often', () => {
        component.photos = new Array<Project365Photo>();
        component.photos.push(new Project365Photo(1, 'photo 1'));
        component.photos.push(new Project365Photo(2, 'photo 2'));
        component.photos.push(new Project365Photo(3, 'photo 3'));

        component.counter = 2;
        component.showMore(1);
        component.showMore(1);

        expect(component.counter).toBe(3);
    });
});
