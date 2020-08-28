import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class PotComponent implements OnInit {
  constructor(public gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

}
