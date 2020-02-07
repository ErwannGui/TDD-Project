import { Component, OnInit, OnDestroy  } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BooksService} from '../books.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit  {
  id: string;
  name: string;
  books: any;
  count: any;

  constructor(private route: ActivatedRoute, private booksService: BooksService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.booksService.all({ beforepath: 'authors/' + this.id }).subscribe(books => (this.books = books));
    this.count = this.books.data.length;
    console.log(this.books);
  }

  countBooks() {
    return this.count;
  }

}
