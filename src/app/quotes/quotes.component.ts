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
			"[REDACTED]. What were we thinking??",
			"We can't leave until we pack up the Riviera!",
			"Tap my privilege. That’ll be my slogan. Like how people can take some of my privilege.",
			"He’s as gay as the boy baby skunk kissing the other baby skunk. Who’s also a boy.",
			"¿Privilege?",
			"What if an alligator falls in love with a squirrel and they have a baby?"
		]
	}

}
