import { Injectable } from '@angular/core';
import { Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';
import { Book } from './books.service';

export class Author extends Resource {
  public attributes = {
    name: 'default name',
    date_of_birth: ''
  };

  public relationships = {
    books: new DocumentCollection<Book>(),
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService extends Service<Author> {
  public resource = Author;
  public type = 'authors';
}
