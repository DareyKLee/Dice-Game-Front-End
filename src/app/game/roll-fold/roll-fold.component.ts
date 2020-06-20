import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-fold',
  templateUrl: './roll-fold.component.html',
  styleUrls: ['./roll-fold.component.css']
})
export class RollFoldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  roll() {
    console.log("ROLL CLICKED");
  }

  fold() {
    console.log("FOLD CLICKED");
  }
}
