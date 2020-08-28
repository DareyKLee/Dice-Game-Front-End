import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class OpponentComponent implements OnInit {
  constructor(public gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

}
