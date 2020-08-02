import { Component, OnInit } from '@angular/core';
import { GameStateModel } from '../game-state.model';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class BetComponent implements OnInit {
  constructor(public gameStateModel: GameStateModel) { }

  ngOnInit(): void {
  }

}
