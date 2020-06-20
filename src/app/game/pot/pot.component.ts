import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['../shared/gameInterface.css']
})
export class PotComponent implements OnInit {
  potPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
