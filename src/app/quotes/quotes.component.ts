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
			"Every time I look at Bobby, he's doing something FUCKING STUPID!",
			"I’m alone in the bathroom. I found this second hat. I’m Two-Hats Teetum.",
			"I don’t know where it came from.",
			"So since I didn’t get cheese on my sandwich, can I get avocado for free?",
			"We can't leave until we pack up the Riviera!",
			"Tap my privilege. That’ll be my slogan. Like how people can take some of my privilege.",
			"¿Privilege?",
			"I'm the sluttiest girl in this Walmart.",
			"He’s as gay as the boy baby skunk kissing the other baby skunk. Who’s also a boy.",
			"What if an alligator falls in love with a squirrel and they have a baby?",
			"[REDACTED]. What were we thinking??",
		]
	}

}
