import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';

export class Author extends Resource {
  public attributes = {
    name: 'default name',
    date_of_birth: ''
  };

  /*public relationships = {
    books: new DocumentCollection<Book>(),
    photo: new DocumentResource<Photo>()
  };*/
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService extends Service<Author> {
  public resource = Author;
  public type = 'authors';
}
