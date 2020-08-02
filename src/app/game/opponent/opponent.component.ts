import { Component, OnInit } from '@angular/core';
import { GameStateModel } from '../game-state.model';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class OpponentComponent implements OnInit {
  constructor(public gameStateModel: GameStateModel) { }

  ngOnInit(): void {
  }

}
