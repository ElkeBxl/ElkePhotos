import { PartiesModule } from './parties.module';

describe('PartiesModule', () => {
    let partiesModule: PartiesModule;

    beforeEach(() => {
        partiesModule = new PartiesModule();
    });

    it('should create an instance', () => {
        expect(partiesModule).toBeTruthy();
    });
});
