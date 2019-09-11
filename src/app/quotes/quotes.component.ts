import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-quotes',
	templateUrl: './quotes.component.html',
	styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
	quotes: string[]
	constructor() { }

	ngOnInit() {
		this.quotes = [
			"Keep your friends close and your mortal enemies dead.",
			"[REDACTED]",
			"We can't leave until we pack up the Riviera!",
		]
	}

}
