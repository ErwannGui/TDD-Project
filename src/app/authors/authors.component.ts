import {Component, OnInit} from '@angular/core';
import { AuthorsService, Author } from '../authors.service';
import { DocumentCollection } from 'ngx-jsonapi';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  public authors: DocumentCollection<Author>;
  // public authors: any;
  error: string;
  count: number;

  constructor(public authorsService: AuthorsService, private router: Router) {
    this.error = '';
    this.count = 0;
  }

  public async goToDetails(authorID: string) {
    this.router.navigate(['/authors', authorID]);
  }

  ngOnInit() {
    this.authorsService.all({}).subscribe(authors => (this.authors = authors));
    this.count = this.authors.data.length;
    // console.log(this.authors);
  }

  countAuthors() {
    return this.count;
  }

}
