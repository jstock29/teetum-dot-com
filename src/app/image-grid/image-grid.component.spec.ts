import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ImageGridComponent } from './image-grid.component';

describe('ImageGridComponent', () => {
	let component: ImageGridComponent;
	let fixture: ComponentFixture<ImageGridComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ImageGridComponent],
			imports: [
				MatGridListModule,
				FlexLayoutModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImageGridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
