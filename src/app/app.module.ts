import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AboutComponent } from './about/about.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		Angular2ImageGalleryModule
	],
	declarations: [
		AppComponent,
		NavComponent,
		DashboardComponent,
		ImageGridComponent,
		QuotesComponent,
		AboutComponent,
		FourohfourComponent,
		BlogComponent,
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
