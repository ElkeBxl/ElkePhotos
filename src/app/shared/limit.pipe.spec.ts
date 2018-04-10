import { LimitPipe } from './limit.pipe';

describe('LimitPipe', () => {
	let pipe: LimitPipe;

	beforeEach(() => {
		pipe = new LimitPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('accepts an empty list', () => {
		expect(pipe.transform([], 1)).toEqual([]);
	});

	it('requires a length', () => {
		expect(function() {
			pipe.transform([]);
		}).toThrow();
	});

	it('does not limit a list that is too small', () => {
		expect(pipe.transform([1, 2, 3], 4)).toEqual([1, 2, 3]);
	});

	it('does not limit a list that is just about right in size', () => {
		expect(pipe.transform([1, 2, 3], 3)).toEqual([1, 2, 3]);
	});

	it('does limits a list that is too big', () => {
		expect(pipe.transform([1, 2, 3], 2)).toEqual([1, 2]);
	});
});
