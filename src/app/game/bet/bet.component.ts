import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class BetComponent implements OnInit {
  betPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
