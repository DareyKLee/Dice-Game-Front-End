import { Component, OnInit } from '@angular/core';
import { GameStateModel } from '../game-state.model';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class BetComponent implements OnInit {
  constructor(public gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

}
