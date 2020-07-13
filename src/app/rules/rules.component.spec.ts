import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';

import { RulesComponent } from './rules.component';
import { appRoutes } from '../app-routing.module';

describe('RulesComponent', () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [ RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rules', () => {
    expect(debugElement.query(By.css('h1')).nativeElement.innerText).toBe('DICE GAME RULES');
  })

  it('should route to game page', fakeAsync(() => {
    const startGameButton = debugElement.nativeElement.querySelector('#startGameButton');
    const location = TestBed.get(Location);

    startGameButton.click();
    tick();

    expect(location.path()).toBe('/game');
  }))
});
