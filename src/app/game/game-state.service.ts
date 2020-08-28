import { Injectable, Output, EventEmitter } from '@angular/core';
import { GameStateModel } from './game-state.model';
import * as io from 'socket.io-client';

@Injectable({providedIn: 'root'})
export class GameStateService {    
    private playerSocket;
    public gameStarted = false;

    constructor(private gameStateModel: GameStateModel) {
        this.playerSocket = io.connect('https://still-bastion-63509.herokuapp.com/');
        // this.playerSocket = io.connect('http://localhost:8081');

        this.playerSocket.on('message', (message) => {
            console.log(message);
            this.gameStarted = true;

            switch(message) {
                case 'LOST GAME':
                    alert('LOST THE GAME');

                    location.reload();

                    break;
                case 'WON GAME':
                    alert('WON THE GAME');

                    location.reload();

                    break;
                case 'LOST ROUND':
                    alert('LOST THE ROUND');

                    break;
                case 'WON ROUND':
                    alert('WON THE ROUND');

                    break;
                case 'OPPONENT DISCONNECTED':
                    alert('OPPONENT HAS DISCONNECTED');
                    location.reload();

                    break;
                default:
                    this.updateGameState(message);
            }
        })
    }

    roll(){
        this.gameStateModel.playerTurn = !this.gameStateModel.playerTurn;

        this.playerSocket.send('ROLL');
    }

    fold() {
        this.gameStateModel.playerTurn = !this.gameStateModel.playerTurn;

        this.playerSocket.send('FOLD');
    }

    updateGameState(gameStateData) {
        this.gameStateModel.dice = gameStateData.dice;
        this.gameStateModel.pot = gameStateData.pot;
        this.gameStateModel.bet = gameStateData.bet;
        this.gameStateModel.player = gameStateData.playerGold;
        this.gameStateModel.opponent = gameStateData.opponentGold;
        this.gameStateModel.playerTurn = gameStateData.playerTurn;
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

    get playerTurn() {
        return this.gameStateModel.playerTurn;
    }
}