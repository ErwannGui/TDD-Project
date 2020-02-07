import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AuthorsComponent} from './authors/authors.component';

import { NgxJsonapiModule } from 'ngx-jsonapi';
import {AuthorItemComponent} from './author-item/author-item.component';
import {Router} from '@angular/router';
import {routes} from './app-routing.module';

describe('AppComponent', () => {
  /*let location: Location;
  let router: Router;
  let fixture;*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule/*.withRoutes(routes)*/,
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        })
      ],
      declarations: [
        AppComponent,
        AuthorsComponent,
        AuthorItemComponent
      ],
    }).compileComponents();
  }));

  /*router = TestBed.get(Router);
  location = TestBed.get(Location);*/
  // fixture = TestBed.createComponent(AppComponent);

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // router.initialNavigation();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TDD-Project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TDD-Project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('TDD-Project app is running!');
  });
});
