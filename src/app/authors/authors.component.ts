import {Component, OnInit} from '@angular/core';
import { AuthorsService, Author } from '../authors.service';
import { DocumentCollection } from 'ngx-jsonapi';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  public authors: DocumentCollection<Author>;
  // public authors: any;
  error: string;

  constructor(public api: AuthorsService) {
    this.error = '';
  }

  ngOnInit() {
    this.api.all({}).subscribe(authors => (this.authors = authors));
    // console.log(this.authors);
  }

}
