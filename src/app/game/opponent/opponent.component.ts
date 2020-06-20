import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class OpponentComponent implements OnInit {
  opponentPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
