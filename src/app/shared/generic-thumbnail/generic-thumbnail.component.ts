import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-generic-thumbnail',
	templateUrl: './generic-thumbnail.component.html',
	styleUrls: ['./generic-thumbnail.component.scss']
})
export class GenericThumbnailComponent {

	@Input() genericStylings: object;

	@Input() contentStylings: object;

	@Input() classes: string[];

	@Input() image: string;

	@Input() albumname: string;

	constructor(private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content, { windowClass: 'custom-modal' });
	}

}
