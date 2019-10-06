import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				NoopAnimationsModule,
				MatIconModule,
				MatToolbarModule,
				MatSidenavModule,
				MatListModule
			],
			declarations: [
				AppComponent,
				NavComponent,
			],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'Teeum!'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Teetum!');
	});

});
