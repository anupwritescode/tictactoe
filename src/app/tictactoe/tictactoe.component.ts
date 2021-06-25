import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor() { }

  gamePad: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentTurn: string = 'X';
  winner: boolean = false;
  draw: boolean = false;
  winningSequence: number[][] = [
    [],
    [],
    []
  ];
  ngOnInit() {

  }

  markBox(row: number, column: number) {
    if(this.winner) return;
    if(this.gamePad[row][column] === 'X' || this.gamePad[row][column] === 'O') return;
    this.gamePad[row][column] = this.currentTurn;
    setTimeout(() => { //add delay to check winner to wait for all data bindings to affect
      this.checkWinCondition();
      if (!this.winner) {
        if(this.currentTurn === 'X') {
          this.currentTurn = 'O';
        } else if(this.currentTurn === 'O') {
          this.currentTurn = 'X';
        }
      }
    }, 50);
  }

  checkWinCondition() {
    //begin from middle box and check diagonals
    if(this.gamePad[1][1] === this.currentTurn) {
      if(this.gamePad[0][0] === this.currentTurn) {
        if(this.gamePad[2][2] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [0, 0];
          this.winningSequence[1] = [1, 1];
          this.winningSequence[2] = [2, 2];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
      if(this.gamePad[1][0] === this.currentTurn) {
        if(this.gamePad[1][2] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [1, 0];
          this.winningSequence[1] = [1, 1];
          this.winningSequence[2] = [1, 2];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
      if(this.gamePad[0][1] === this.currentTurn) {
        if(this.gamePad[2][1] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [0, 1];
          this.winningSequence[1] = [1, 1];
          this.winningSequence[2] = [2, 1];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
      if(this.gamePad[2][0] === this.currentTurn) {
        if(this.gamePad[0][2] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [2, 0];
          this.winningSequence[1] = [1, 1];
          this.winningSequence[2] = [0, 2];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
    }
    //left-top most box horizontal and vertical check
    if(this.gamePad[0][0] === this.currentTurn) {
      if(this.gamePad[1][0] === this.currentTurn) {
        if(this.gamePad[2][0] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [0, 0];
          this.winningSequence[1] = [1, 0];
          this.winningSequence[2] = [2, 0];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
      if(this.gamePad[0][1] === this.currentTurn) {
        if(this.gamePad[0][2] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [0, 0];
          this.winningSequence[1] = [0, 1];
          this.winningSequence[2] = [0, 2];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
    }
    //right-bottom most box horizontal and vertical check
    if(this.gamePad[2][2] === this.currentTurn) {
      if(this.gamePad[1][2] === this.currentTurn) {
        if(this.gamePad[0][2] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [0, 2];
          this.winningSequence[1] = [1, 2];
          this.winningSequence[2] = [2, 2];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
      if(this.gamePad[2][1] === this.currentTurn) {
        if(this.gamePad[2][0] === this.currentTurn) {
          this.winner = true;
          this.winningSequence[0] = [2, 0];
          this.winningSequence[1] = [2, 1];
          this.winningSequence[2] = [2, 2];

          for(let winningBox of this.winningSequence) {
            this.highlight(winningBox[0], winningBox[1]);
          }
          return;
        }
      }
    }
    //check for draw
    for(let line of this.gamePad) {
      for(let box of line) {
        if(box !== 'X' && box !== 'O') {
          this.draw = false;
          return;
        }
      }
    }
    this.draw = true;
    return;
  }

  highlight(row: number, column: number) {
    if(!this.winner) return;
    document.getElementById(row + '-' + column)?.classList.add('highlight');
    return;
  }

  clearGamePad() {
    this.gamePad = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.winner = false;
  }
}
