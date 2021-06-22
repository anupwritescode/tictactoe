import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor() { }

  gamePad : string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentTurn: string = 'X';
  winner: boolean = false;

  ngOnInit() {

  }

  markBox(row: number, column: number) {
    if(this.winner) return;
    this.gamePad[row][column] = this.currentTurn;
    this.checkWinCondition();
    if (!this.winner) {
      if(this.currentTurn === 'X') {
        this.currentTurn = 'O';
      } else if(this.currentTurn === 'O') {
        this.currentTurn = 'X';
      }
    }
  }

  checkWinCondition() {
    //begin from middle box and check diagonals
    if(this.gamePad[1][1] === this.currentTurn) {
      if(this.gamePad[0][0] === this.currentTurn) {
        if(this.gamePad[2][2] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
      if(this.gamePad[1][0] === this.currentTurn) {
        if(this.gamePad[1][2] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
      if(this.gamePad[0][1] === this.currentTurn) {
        if(this.gamePad[2][1] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
      if(this.gamePad[2][0] === this.currentTurn) {
        if(this.gamePad[0][2] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
    }
    //left-top most box horizontal and vertical check
    if(this.gamePad[0][0] === this.currentTurn) {
      if(this.gamePad[1][0] === this.currentTurn) {
        if(this.gamePad[2][0] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
      if(this.gamePad[0][1] === this.currentTurn) {
        if(this.gamePad[0][2] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
    }
    //right-bottom most box horizontal and vertical check
    if(this.gamePad[2][2] === this.currentTurn) {
      if(this.gamePad[1][2] === this.currentTurn) {
        if(this.gamePad[0][2] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
      if(this.gamePad[2][1] === this.currentTurn) {
        if(this.gamePad[2][0] === this.currentTurn) {
          this.winner = true;
          return;
        }
      }
    }
  }


  clearGamePad() {

  }
}
