import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, getTestBed, TestBed } from '@angular/core/testing';
import { Album } from '../models/album';
import { Project365Photo } from '../models/project365photo';
import { JSONPhotoRepository } from './photo.repository.json';

describe('JSONPhotoService', () => {

	let injector: TestBed;
	let service: JSONPhotoRepository;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				JSONPhotoRepository
			],
		});
		injector = getTestBed();
		service = injector.get(JSONPhotoRepository);
		httpMock = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	describe('getProject365()', () => {
		it('should return a Promise<Project365Photo[]>', async(() => {
			const mockResult = [
				new Project365Photo(0, 'test')
			];

			service.getProject365().then(photos => {
				expect(photos).toBeDefined();
				expect(photos.length).toBe(1);
			});

			// we capture all GET requests to send the mockResult
			const req = httpMock.expectOne((all) => true);
			expect(req.request.method).toBe('GET');
			req.flush(mockResult);
		}));
	});

	describe('getAlbum()', () => {
		it('should return an error when no albumname is given', async(() => {
			expect(function() {
				service.getAlbum('');
			}).toThrowError();

			// we want to make sure there are no requests done
			httpMock.expectNone((all) => true);
		}));

		it('should return an error when no valid albumname is given', async(() => {
			const mockResult = [
				new Album('testAlbum')
			];

			service.getAlbum('wrongAlbumName').catch((reason) => expect(reason).not.toEqual(''));

			// we capture all GET requests to send the mockResult
			const req = httpMock.expectOne((all) => true);
			expect(req.request.method).toBe('GET');
			req.flush(mockResult);
		}));

		it('should return an album when an albumname is given', async(() => {
			const mockResult = [
				new Album('testAlbum')
			];

			service.getAlbum('testAlbum').then(album => {
				expect(album).toBeDefined();
				expect(album.id).toEqual('testAlbum');
			});

			// we capture all GET requests to send the mockResult
			const req = httpMock.expectOne((all) => true);
			expect(req.request.method).toBe('GET');
			req.flush(mockResult);
		}));

		it('should return an album with correct number of photos when an albumname is given', async(() => {
			const mockResult = [
				new Album('testAlbum')
			];
			mockResult[0].photosCount = 5;

			service.getAlbum('testAlbum').then(album => {
				expect(album).toBeDefined();
				expect(album.photos).toBeDefined();
				expect(album.photos.length).toEqual(5);
			});

			// we capture all GET requests to send the mockResult
			const req = httpMock.expectOne((all) => true);
			expect(req.request.method).toBe('GET');
			req.flush(mockResult);
		}));
	});
});
