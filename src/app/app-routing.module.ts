import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGridComponent } from './image-grid/image-grid.component';

const routes: Routes = [
	{ path: 'pics', component: ImageGridComponent },
	{ path: 'salads', component: ImageGridComponent },
	{ path: 'anecdotes', component: ImageGridComponent },
	{ path: 'sponcon', component: ImageGridComponent },
	{ path: '**', component: ImageGridComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
