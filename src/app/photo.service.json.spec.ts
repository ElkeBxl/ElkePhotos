import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';import { JSONPhotoService } from './photo.service.json';
import { Project365Photo } from './models/project365photo';
import { HttpClient } from '@angular/common/http';
import { Photo } from './models/photo';
import { PHOTO_SERVICE_TOKEN } from './photo.service.token';
import { Album } from './models/album';

describe('JSONPhotoService', () => {

    let injector: TestBed;
    let service: JSONPhotoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [ 
                JSONPhotoService
            ],
        });
        injector = getTestBed();
        service = injector.get(JSONPhotoService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('getProject365()', () => {
        it('should return a Promise<Project365Photo[]>', async(() => {
            let mockResult = [
                new Project365Photo(0, 'test')
            ];

            service.getProject365().then(photos => {
                expect(photos).toBeDefined();
                expect(photos.length).toBe(1);
            });

            // we capture all GET requests to send the mockResult
            const req = httpMock.expectOne((all) => true);
            expect(req.request.method).toBe("GET");
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
            let mockResult = [
                new Album('testAlbum')
            ];

            service.getAlbum('wrongAlbumName').catch((reason) => expect(reason).not.toEqual(''));

            // we capture all GET requests to send the mockResult
            const req = httpMock.expectOne((all) => true);
            expect(req.request.method).toBe("GET");
            req.flush(mockResult);
        }));

        it('should return an album when an albumname is given', async(() => {
            let mockResult = [
                new Album('testAlbum')
            ];

            service.getAlbum('testAlbum').then(album => {
                expect(album).toBeDefined();
                expect(album.id).toEqual('testAlbum');
            });

            // we capture all GET requests to send the mockResult
            const req = httpMock.expectOne((all) => true);
            expect(req.request.method).toBe("GET");
            req.flush(mockResult);
        }));
        
        it('should return an album with correct number of photos when an albumname is given', async(() => {
            let mockResult = [
                new Album('testAlbum')
            ];
            mockResult[0].photosCount = 5;

            service.getAlbum('testAlbum').then(album => {
                console.log(album);
                expect(album).toBeDefined();
                expect(album.photos).toBeDefined();
                expect(album.photos.length).toEqual(5);
            });

            // we capture all GET requests to send the mockResult
            const req = httpMock.expectOne((all) => true);
            expect(req.request.method).toBe("GET");
            req.flush(mockResult);
        }));
    });
});