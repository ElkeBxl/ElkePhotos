import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';import { JSONPhotoService } from './photo.service.json';
import { Project365Photo } from './models/project365photo';
import { HttpClient } from '@angular/common/http';
import { Photo } from './models/photo';
import { PHOTO_SERVICE_TOKEN } from './photo.service.token';

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
                new Project365Photo('test')
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

        it('should return a Promise with content when an albumname is given', async(() => {
            let mockResult = [
                new Photo('test')
            ];

            service.getAlbum('testAlbum').then(photos => {
                expect(photos).toBeDefined();
                expect(photos.length).toBeGreaterThan(0);
            });

            // we capture all GET requests to send the mockResult
            const req = httpMock.expectOne((all) => true);
            expect(req.request.method).toBe("GET");
            req.flush(mockResult);
        }));
    });
});