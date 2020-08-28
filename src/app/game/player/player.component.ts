import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class PlayerComponent implements OnInit {
  constructor(public gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

}
