import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'generic-thumbnail',
  templateUrl: './generic-thumbnail.component.html',
  styleUrls: ['./generic-thumbnail.component.scss']
})
export class GenericThumbnailComponent implements OnInit {

    @Input() genericStylings: object;

    @Input() contentStylings: object;

    @Input() classes: string[];

    constructor() { }

    ngOnInit() {
    }

}
