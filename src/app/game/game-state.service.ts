import { Injectable } from '@angular/core';
import { GameStateModel } from './game-state.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GameStateService {
    constructor(private gameStateModel: GameStateModel, private httpClient: HttpClient){}

    roll(){
        this.httpClient.get(
            '#####/roll'
        )
        .subscribe(gameStateData => {
            this.updateGameState(gameStateData);
        })
    }

    fold() {
        this.httpClient.get(
            '#####/fold'
        ).subscribe(gameStateData => {
            this.updateGameState(gameStateData);
        })
    }

    setUpNewGame() {
        this.httpClient.get(
            '#####/new-game'
        )
        .subscribe(gameStartData => {
            this.updateGameState(gameStartData);
        })
    }

    updateGameState(gameStateData) {
        this.gameStateModel.dice = gameStateData.dice;
        this.gameStateModel.pot = gameStateData.pot;
        this.gameStateModel.bet = gameStateData.bet;
        this.gameStateModel.player = gameStateData.player;
        this.gameStateModel.opponent = gameStateData.opponent;
    }

    get dice() {
        return this.gameStateModel.dice;
    }

    get pot() {
        return this.gameStateModel.pot;
    }

    get bet() {
        return this.gameStateModel.bet;
    }

    get player() {
        return this.gameStateModel.player;
    }

    get opponent() {
        return this.gameStateModel.opponent;
    }
}