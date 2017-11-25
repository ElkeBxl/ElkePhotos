import { Project365Module } from './project365.module';

describe('Project365Module', () => {
    let project365Module: Project365Module;

    beforeEach(() => {
        project365Module = new Project365Module();
    });

    it('should create an instance', () => {
        expect(project365Module).toBeTruthy();
    });
});
