import { Component, OnInit } from '@angular/core';
import { GameStateModel } from '../game-state.model';

@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class PotComponent implements OnInit {
  constructor(public gameStateModel: GameStateModel) { }

  ngOnInit(): void {
  }

}
