import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['../shared/gameInterface.css'],
})
export class DiceComponent implements OnInit {
  constructor(public gameStateService: GameStateService) {}

  ngOnInit(): void {
  }

}
