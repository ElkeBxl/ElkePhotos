import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/album';
import { Project365Photo } from '../models/project365photo';
import { IPhotoService } from '../services/photo.service';
import { SharedModule } from '../shared/shared.module';
import { AlbumComponent } from './album.component';


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
