import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { IPhotoService } from '../photo.service';
import { Project365Photo } from '../models/project365photo';
import { Photo } from '../models/photo';
import { SharedModule } from '../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Params } from '@angular/router';
import { Album } from '../models/album';

// We mock a PhotoService to avoid any dependencies on stuff 
// like HttpClient (as is the case in JSONPhotoService)
class MockPhotoService implements IPhotoService {
    getProject365(): Promise<Project365Photo[]> {
        return new Promise(() => new Array<Project365Photo>());
    }    
    getAlbum(): Promise<Album> {
        return new Promise(() => new Album("testAlbum"));
    }
}

describe('AlbumComponent', () => {
    let component: AlbumComponent;
    let fixture: ComponentFixture<AlbumComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AlbumComponent ],
            imports: [ SharedModule,  ]
        })
        .compileComponents();

        TestBed.overrideComponent(AlbumComponent, {
            set: {
                providers: [
                    { provide: ActivatedRoute, useValue: { params: Observable.of([{ name: 'test' }]) } },
                    MockPhotoService
                ]
            }
        });

        fixture = TestBed.createComponent(AlbumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
