import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class PlayerComponent implements OnInit {
  playerPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
