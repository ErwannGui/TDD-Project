import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorItemComponent } from './author-item/author-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
