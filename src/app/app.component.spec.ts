import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { appRoutes } from './app-routing.module';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should redirect '' to '/rules'`, fakeAsync(() => {
    router.navigate(['']);
    tick();

    expect(location.path()).toBe('/rules');
  }))

  it(`should redirect non recognized routes to 'rules'`, fakeAsync(() => {
    router.navigate(['unrecognized']);
    tick();

    expect(location.path()).toBe('/rules');
  }))
});
