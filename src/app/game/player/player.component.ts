import { Component, OnInit } from '@angular/core';
import { GameStateModel } from '../game-state.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class PlayerComponent implements OnInit {
  constructor(public gameStateModel: GameStateModel) { }

  ngOnInit(): void {
  }

}
