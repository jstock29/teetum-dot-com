import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-grid',
	templateUrl: './image-grid.component.html',
	styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
	images: string[];
	videos: string[];

	constructor() {
		this.images = [
			'./assets/images/IMG_0687.PNG',
			'./assets/images/IMG_0692.PNG',
			'./assets/images/IMG_0694.PNG',
			'./assets/images/IMG_0695.PNG',
			'./assets/images/0E9C8CEF-F833-4EF1-B0F0-45A1A2407444.JPG',
			'./assets/images/IMG_2311.jpg',
		]

		this.videos = [
			'./assets/images/recorded-4199671992387.mp4'
		]
	}


	ngOnInit() {

	}

}
