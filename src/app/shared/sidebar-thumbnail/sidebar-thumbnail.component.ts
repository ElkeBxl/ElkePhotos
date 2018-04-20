import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-sidebar-thumbnail',
	templateUrl: './sidebar-thumbnail.component.html',
	styleUrls: ['./sidebar-thumbnail.component.scss']
})
export class SidebarThumbnailComponent {

	private _image: string;
	get image(): string {
		return this._image;
	}
	@Input() set image(newImage: string) {
		if (newImage.length < 1) {
			throw new Error(`Image url should be provided, given: ${newImage}`);
		}
		this._image = newImage;
	}

	@Input() albumname: string;

}
