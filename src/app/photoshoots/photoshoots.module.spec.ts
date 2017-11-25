import { PhotoshootsModule } from './photoshoots.module';

describe('PhotoshootsModule', () => {
    let photoshootsModule: PhotoshootsModule;

    beforeEach(() => {
        photoshootsModule = new PhotoshootsModule();
    });

    it('should create an instance', () => {
        expect(photoshootsModule).toBeTruthy();
    });
});
