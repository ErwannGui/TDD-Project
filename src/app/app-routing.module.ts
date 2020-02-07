import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorItemComponent} from './author-item/author-item.component';


export const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:id', component: AuthorItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
