import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent {
	hashtag: string;
	possible_hashtags: string[];
	i: number;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	randomInt = function(range) {
		var min = 0;
		var max = range;
		var random = Math.floor(Math.random() * (+max - +min)) + +min;
		return random
	}

	constructor(private breakpointObserver: BreakpointObserver) {
		this.possible_hashtags = [
			'teetum',
			'blondegirlsrock',
			'deh',
			'fitspriation',
			'jesusass',
			'spoopy',
			'veggies',
			'beefchili',
			'sweetgreensunday',
			'ad',
			'glamneglect',
			'thepacedotco',
			'spon'
		]
		this.i = this.randomInt(this.possible_hashtags.length)
		this.hashtag = this.possible_hashtags[this.i]
	}

	openNav() {
		this.i = this.randomInt(this.possible_hashtags.length)
		this.hashtag = this.possible_hashtags[this.i]
	}

}
