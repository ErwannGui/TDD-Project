import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsComponent } from './authors.component';
import { AuthorsService, Author } from '../authors.service';
import {DebugElement} from '@angular/core';
import {BrowserModule, By} from '@angular/platform-browser';
import {Autoregister, Service, Resource, DocumentCollection, DocumentResource, NgxJsonapiModule} from 'ngx-jsonapi';
import {of} from 'rxjs';
import Pretender from 'pretender';
import set = Reflect.set;
import {AppRoutingModule} from '../app-routing.module';
import {AuthorItemComponent} from '../author-item/author-item.component';

const authorsToUse = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'Firstname',
        date_of_birst: '1989-10-21'
      }
    },
    {
      id: 2,
      attributes: {
        name: 'Firstname 2',
        date_of_birst: '1975-06-05'
      }
    },
  ]
};

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* const Authors = {
  data: [
    {
      type: 'authors',
      id: '1',
      attributes: {
        name: 'Raoul Bode I',
        birthplace: 'Micronesia',
        date_of_birth: '2012-04-05',
        date_of_death: '1991-05-20'
      },
      relationships: {
        photos: {
          data: [
            {
              type: 'photos',
              id: '1'
            }, {
            type: 'photos',
              id: '2'
            }
          ]},
        books: {
          data: []
        }
      },
      links: {
        self: '/authors/1'
      }
    },
    {type: 'authors', id: '2', attributes: {name: 'Dr. Gregg Rath', birthplace: 'Saint Pierre and Miquelon', date_of_birth: '1975-03-12', date_of_death: '1992-03-24'}, relationships: {photos: {data: []}, books: {data: [{type: 'books', id: '5'}]}}, links: {self: '/authors/2'}},
    {type: 'authors', id: '3', attributes: {name: 'Dr. Kiley Kuvalis Jr.', birthplace: 'Isle of Man', date_of_birth: '1995-03-22', date_of_death: '1999-10-18'}, relationships: {photos: {data: [{type: 'photos', id: '3'}]}, books: {data: [{type: 'books', id: '6'}]}}, links: {self: '/authors/3'}},
    {type: 'authors', id: '4', attributes: {name: 'Mr. Marlon Jacobi', birthplace: 'Turkey', date_of_birth: '2003-09-13', date_of_death: '2019-07-05'}, relationships: {photos: {data: [{type: 'photos', id: '4'}, {type: 'photos', id: '5'}]}, books: {data: [{type: 'books', id: '16'}]}}, links: {self: '/authors/4'}},
    {type: 'authors', id: '5', attributes: {name: 'Leonard Simonis', birthplace: 'Bouvet Island (Bouvetoya)', date_of_birth: '2001-12-17', date_of_death: '2001-03-21'}, relationships: {photos: {data: []}, books: {data: [{type: 'books', id: '2'}, {type: 'books', id: '21'}, {type: 'books', id: '24'}]}}, links: {self: '/authors/5'}},
    {type: 'authors', id: '6', attributes: {name: 'Kendall Rogahn', birthplace: 'Guinea', date_of_birth: '1977-09-21', date_of_death: '1985-02-08'}, relationships: {photos: {data: [{type: 'photos', id: '6'}]}, books: {data: [{type: 'books', id: '42'}]}}, links: {self: '/authors/6'}},
    {type: 'authors', id: '7', attributes: {name: 'Phoebe DuBuque', birthplace: 'Estonia', date_of_birth: '2017-08-18', date_of_death: '2006-08-11'}, relationships: {photos: {data: [{type: 'photos', id: '7'}, {type: 'photos', id: '8'}]}, books: {data: []}}, links: {self: '/authors/7'}},
    {type: 'authors', id: '8', attributes: {name: 'Miracle Morissette PhD', birthplace: 'Mauritius', date_of_birth: '1986-07-15', date_of_death: '2007-11-08'}, relationships: {photos: {data: []}, books: {data: [{type: 'books', id: '15'}, {type: 'books', id: '43'}, {type: 'books', id: '50'}]}}, links: {self: '/authors/8'}},
    {type: 'authors', id: '9', attributes: {name: 'Kiana Tromp', birthplace: 'Malta', date_of_birth: '1993-06-01', date_of_death: '1975-02-09'}, relationships: {photos: {data: [{type: 'photos', id: '9'}]}, books: {data: [{type: 'books', id: '38'}, {type: 'books', id: '47'}]}}, links: {self: '/authors/9'}},
    {type: 'authors', id: '10', attributes: {name: 'Dr. Rory Rempel DVM', birthplace: 'Saint Helena', date_of_birth: '1974-05-20', date_of_death: '1979-04-05'}, relationships: {photos: {data: [{type: 'photos', id: '10'}, {type: 'photos', id: '11'}]}, books: {data: [{type: 'books', id: '18'}, {type: 'books', id: '23'}]}}, links: {self: '/authors/10'}}
  ]}; */

/*const server = new Pretender(function() {
  this.get('jsonapiplayground.reyesoft.com/v2/', request => {
    console.log(Authors);
    const all =  JSON.stringify(Object.keys(Authors.data).map(k => Authors[k]));
    return [200, {'Content-Type': 'application/json'}, all];
  });
});*/

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let authorsService: AuthorsService;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        })
      ],
      declarations: [ AuthorsComponent, AuthorItemComponent ],
      providers: [
        AuthorsService
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    instance = fixture.debugElement.nativeElement;
    // component.authors = authorsToUse;
    authorsService = TestBed.get(AuthorsService);

    fixture.detectChanges();

    // spyOn(authorsService, 'all').mockReturnValue(of(authorsToUse));
  });

  describe('Render', () => {
    /*beforeEach(() => {
      fixture.detectChanges();
    });*/

    it('show all authors', async () => {
      await timeout(1000);
      fixture.detectChanges();
      const authorsElements = fixture.debugElement.queryAll(By.css('.author'));
      expect(authorsElements.length).toBe(10);
    });

    it('click item', async () => {
      await component.goToDetails('1');
      /*const authorLink = instance.querySelector('#author_1');
      setTimeout(() => {
        authorLink.click();
      }, 1000);*/
      fixture.detectChanges();
      console.log(location.pathname);
      expect(location.pathname).toBe('/authors/1');
      // const authorLink = fixture.debugElement.queryAll(By.css('.a:nth-first-of-type'));
    });

  });
});
