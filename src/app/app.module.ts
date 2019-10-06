import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

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
		FlexLayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatDividerModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatSnackBarModule,
		MatMenuModule
	],
	declarations: [
		AppComponent,
		NavComponent,
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
