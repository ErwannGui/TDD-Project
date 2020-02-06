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

/*const authorsToUse: Author[] = [
  { name: 'The big Lebowski', date_of_birth: '' },
  { title: 'Fences' } as Author
];*/
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

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let authorsService: AuthorsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        })
      ],
      declarations: [ AuthorsComponent ],
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

  });
});
