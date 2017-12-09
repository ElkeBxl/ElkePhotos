import { Component, OnInit, Input } from '@angular/core';
import { Project365Photo } from '../../models/project365photo';

@Component({
  selector: 'project365-photo',
  templateUrl: './project365-photo.component.html',
  styleUrls: ['./project365-photo.component.scss']
})
export class Project365PhotoComponent implements OnInit {
    @Input('photo') photo: Project365Photo;
    constructor() {
        this.photo = new Project365Photo(0);
        this.photo.day = 0;
        this.photo.month = 0;
        this.photo.year = 0;
    }

    ngOnInit() {
        this.validatePhoto();
    }

    generatePhotoURL(): string {
        this.validatePhoto();
        let partDay = this.pad(this.photo.day, 2);
        let partMonth = this.pad(this.photo.month, 2);
        let partYear = this.pad(this.photo.year, 4);
        return 'assets/images/365/' + partYear + partMonth + partDay + '.jpg';
    }

    validatePhoto(): void {
        if (!this.photo) {
            throw new Error('Photo is required in project365-photo');
        }
        if (this.photo.day == undefined) {
            throw new Error('Day is not defined in 365 photo with name ' + this.photo.name);
        }
        if (this.photo.month == undefined) {
            throw new Error('Month is not defined in 365 photo with name ' + this.photo.name);
        }
        if (this.photo.year == undefined) {
            throw new Error('Year is not defined in 365 photo with name ' + this.photo.name);
        }
    }

    private pad(num: number, size: number): string {
        let s = num + '';
        while (s.length < size) s = '0' + s;
        return s;
    }
}
