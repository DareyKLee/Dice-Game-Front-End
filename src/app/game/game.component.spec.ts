import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameStateService } from './game-state.service';
import { BetComponent } from './bet/bet.component';
import { DiceComponent } from './dice/dice.component';
import { OpponentComponent } from './opponent/opponent.component';
import { PlayerComponent } from './player/player.component';
import { PotComponent } from './pot/pot.component';
import { RollFoldComponent } from './roll-fold/roll-fold.component';
import { MockGameStateService } from './mocks/MockGameStateService.mock';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let mockGameStateService: GameStateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent,
        BetComponent,
        DiceComponent,
        OpponentComponent,
        PlayerComponent,
        PotComponent,
        RollFoldComponent
      ],
      providers: [
        { provide: GameStateService, useClass: MockGameStateService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    mockGameStateService = TestBed.get(GameStateService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call setUpNewGame from GameStateService', () => {
    
  // })

  it('should render game board components', () => {
    const compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('app-bet')).not.toBe(null);
    expect(compiled.querySelector('app-dice')).not.toBe(null);
    expect(compiled.querySelector('app-pot')).not.toBe(null);
    expect(compiled.querySelector('app-player')).not.toBe(null);
    expect(compiled.querySelector('app-opponent')).not.toBe(null);
    expect(compiled.querySelector('app-roll-fold')).not.toBe(null);
  })
});
