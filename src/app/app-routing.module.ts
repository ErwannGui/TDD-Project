import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorsComponent} from './authors/authors.component';


const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
