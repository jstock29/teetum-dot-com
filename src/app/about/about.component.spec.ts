import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule, MatSnackBarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AboutComponent],
			imports: [
				NoopAnimationsModule,
				LayoutModule,
				MatDividerModule,
				MatSnackBarModule
			]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
