import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { AboutComponent } from './about/about.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';

const routes: Routes = [
	{ path: '', redirectTo: '/blog', pathMatch: 'full' },
	{ path: 'blog', component: BlogComponent },
	{ path: 'pics', component: ImageGridComponent },
	{ path: 'what-were-we-thinking', component: AboutComponent },
	{ path: 'quotes', component: QuotesComponent },
	{ path: 'sponcon', component: ImageGridComponent },
	{ path: '**', component: FourohfourComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
