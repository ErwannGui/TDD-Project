import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
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
