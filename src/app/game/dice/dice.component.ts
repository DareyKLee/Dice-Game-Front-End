import { Component, OnInit } from '@angular/core';
import { GameStateModel } from '../game-state.model';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['../shared/gameInterface.css'],
})
export class DiceComponent implements OnInit {
  constructor(public gameStateModel: GameStateModel) {}

  ngOnInit(): void {
  }

}
