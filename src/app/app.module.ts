import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { DiceComponent } from './game/dice/dice.component';
import { PotComponent } from './game/pot/pot.component';
import { BetComponent } from './game/bet/bet.component';
import { PlayerComponent } from './game/player/player.component';
import { OpponentComponent } from './game/opponent/opponent.component';
import { RollFoldComponent } from './game/roll-fold/roll-fold.component';
import { GameStateModel } from './game/game-state.model';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    GameComponent,
    DiceComponent,
    PotComponent,
    BetComponent,
    PlayerComponent,
    OpponentComponent,
    RollFoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [GameStateModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
