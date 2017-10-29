export class Photo {
    name: string;
    description: string;
    exposure: string;
    aperture: string;
    focallength: number;
    iso: number;
    constructor(theName: string) {
        this.name = theName;
    }
}