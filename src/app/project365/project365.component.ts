import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Project365Photo } from '../models/project365photo';
import { IPhotoService } from '../services/photo.service';
import { PHOTO_SERVICE_TOKEN } from '../services/photo.service.token';

@Component({
	selector: 'app-project365',
	templateUrl: './project365.component.html',
	styleUrls: ['./project365.component.scss']
})
export class Project365Component implements OnInit, AfterViewInit {

	public photos: Project365Photo[] = [];
	public counter = 10;

	@ViewChild('continuousscroll') private continuousScrollEnd: ElementRef;

	constructor(@Inject(PHOTO_SERVICE_TOKEN) private photoService: IPhotoService) {
	}

	ngOnInit() {
		this.photoService.getProject365().then(res => this.photos = res);
	}

	ngAfterViewInit() {
		window.addEventListener('scroll', this.scrollListener);
	}

	scrollListener = () => {
		if ((window.pageYOffset + window.innerHeight) >= this.continuousScrollEnd.nativeElement.offsetTop) {
			this.showMore();
		}
	}

	showMore(amount: number = 10): void {
		this.counter = this.counter + amount;
		if (this.counter > this.photos.length) {
			this.counter = this.photos.length;
		}
	}
}
