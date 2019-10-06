import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
	MatDividerModule,
	MatListModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { QuotesComponent } from './quotes.component';

describe('QuotesComponent', () => {
	let component: QuotesComponent;
	let fixture: ComponentFixture<QuotesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [QuotesComponent],
			imports: [
				NoopAnimationsModule,
				LayoutModule,
				MatDividerModule,
				MatListModule,
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(QuotesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
