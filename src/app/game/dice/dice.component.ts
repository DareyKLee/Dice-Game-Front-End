import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['../shared/gameInterface.css'],
})
export class DiceComponent implements OnInit {
  diceNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
