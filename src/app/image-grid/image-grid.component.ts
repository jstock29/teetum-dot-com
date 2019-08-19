import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-grid',
	templateUrl: './image-grid.component.html',
	styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
	images: string[];

	constructor() {
		this.images = [
			'./assets/images/IMG_0687.PNG',
			'./assets/images/IMG_0692.PNG',
			'./assets/images/IMG_0694.PNG',
			'./assets/images/IMG_0695.PNG',
			'./assets/images/IMG_2311.jpg',
		]
	}


	ngOnInit() {

	}

}
