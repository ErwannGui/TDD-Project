import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorItemComponent } from './author-item.component';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxJsonapiModule} from 'ngx-jsonapi';
import {Book, BooksService} from '../books.service';
import {AuthorsService} from '../authors.service';
import {By} from '@angular/platform-browser';

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('AuthorItemComponent', () => {
  let component: AuthorItemComponent;
  let fixture: ComponentFixture<AuthorItemComponent>;
  let bookService: BooksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorItemComponent,
      ],
      imports: [
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        }),
      ],
      providers: [
        BooksService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '1';
                },
              },
            },
          },
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorItemComponent);
    component = fixture.componentInstance;
    bookService = TestBed.get(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render', () => {
    /*beforeEach(() => {
      fixture.detectChanges();
    });*/

    it('show all books', async () => {
      await timeout(1000);
      fixture.detectChanges();
      const authorsElements = fixture.debugElement.queryAll(By.css('.book'));
      expect(authorsElements.length).toBe(3);
    });

  });
});
