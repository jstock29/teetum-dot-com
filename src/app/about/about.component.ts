import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	i: number;
	j: number;
	messages: any[];
	constructor(private _snackBar: MatSnackBar) { }

	ngOnInit() {
		this.i = 0;
		this.j = 0;
		this.messages = [
			{
				message: 'Hai, Teetum, no touching thanksomuch.',
				action: 'Oops, sry Teets!'
			},
			{
				message: 'No, seriously are you DEAF??',
				action: 'WHAT???'
			},
			{
				message: "Have you ever watched the light leave someone's eyes?",
				action: 'Ummmmm...'
			},
			{
				message: "There's a town in upstate New York that cowers when they hear my name.",
				action: 'Are you okay?'
			},
			{
				message: "I WILL LITERALLY MURDER YOU I'VE DONE IT BEFORE",
				action: '3, 2, 1, getting MURDERED!!'
			}
		]
	}

	whatsThis() {
		console.log('Hey look, an Easter Egg!');
		if (this.i === 0 || this.i === 5 || this.i === 10 || this.i === 25 || this.i === 50) {
			let message = this.messages[this.j]['message'];
			let action = this.messages[this.j]['action'];
			this._snackBar.open(message, action, {
				duration: 10000,
			});
			this.j += 1
		}
		this.i += 1
	}
}
