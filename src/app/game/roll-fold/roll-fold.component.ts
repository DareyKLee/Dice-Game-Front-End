import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-roll-fold',
  templateUrl: './roll-fold.component.html',
  styleUrls: ['./roll-fold.component.css']
})
export class RollFoldComponent implements OnInit {

  constructor(public gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

  roll() {
    this.gameStateService.roll();
  }

  fold() {
    this.gameStateService.fold();
  }
}
