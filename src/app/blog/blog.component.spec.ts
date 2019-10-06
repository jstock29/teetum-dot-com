import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
	let component: BlogComponent;
	let fixture: ComponentFixture<BlogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BlogComponent],
			imports: [
				NoopAnimationsModule,
				LayoutModule,
				MatDividerModule,
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
