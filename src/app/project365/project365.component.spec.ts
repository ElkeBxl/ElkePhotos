import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project365Module } from './project365.module';
import { Project365Component } from './project365.component';
import { PHOTO_SERVICE_TOKEN } from '../photo.service.token';
import { SharedModule } from '../shared/shared.module';
import { JSONPhotoService } from '../photo.service.json';
import { Project365Photo } from '../models/project365photo';
import { IPhotoService } from '../photo.service';
import { Photo } from '../models/photo';
import { Project365PhotoComponent } from './project365-photo/project365-photo.component';

// We mock a PhotoService to avoid any dependencies on stuff 
// like HttpClient (as is the case in JSONPhotoService)
class MockPhotoService implements IPhotoService {
    getProject365(): Promise<Project365Photo[]> {
        return new Promise(() => new Array<Project365Photo>());
    }
    getAlbum(): Promise<Photo[]> {
        return new Promise(() => new Array<Photo>());
    }
}

describe('Project365Component', () => {
    let component: Project365Component;
    let fixture: ComponentFixture<Project365Component>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Project365Component, Project365PhotoComponent]
        });

        TestBed.overrideComponent(Project365Component, {
            set: {
                providers: [
                    { provide: PHOTO_SERVICE_TOKEN, useClass: MockPhotoService }
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
});
