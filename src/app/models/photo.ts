export class Photo {
	id: number;
	name: string;
	description: string;
	exposure: string;
	aperture: string;
	focallength: number;
	iso: number;
	fisheye: boolean;
	constructor(id: number, name: string = '') {
		this.id = id;
		this.name = name;
	}
}
