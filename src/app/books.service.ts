import { Injectable } from '@angular/core';
import {Service, Resource, DocumentCollection, DocumentResource, Autoregister} from 'ngx-jsonapi';

export class Book extends Resource {
  public attributes = {
    title: 'default title',
    date_published: '',
    isbn: ''
  };
}

@Injectable({
  providedIn: 'root'
})
export class BooksService extends Service<Book> {
  public resource = Book;
  public type = 'books';
  public ttl = 1;

  // executed before get data from server
  public parseFromServer(attributes): void {
    attributes.title = '📖 ' + attributes.title;
  }

  // executed before send to server
  public parseToServer(attributes): void {
    if ('title' in attributes) {
      attributes.title = attributes.title.replace('📖 ', '');
    }
  }
}
