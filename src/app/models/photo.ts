export class Photo {
    id: number;
    name: string;
    description: string;
    exposure: string;
    aperture: string;
    focallength: number;
    iso: number;
    constructor(id: number, name: string = '') {
        this.id = id;
        this.name = name;
    }
}