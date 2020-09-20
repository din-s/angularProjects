import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = ''
  isCross: boolean = false
  game: string[] = new Array(9).fill('empty')

  newGame = () => {
    this.winMessage = ''
    this.isCross = false
    this.game = new Array(9).fill('empty')
  }

  checkWinner = () => {
    //check winner on row
    //for row no 0 : 0,1,2
    if (
      this.game[0] !== 'empty' &&
      this.game[0] === this.game[1] &&
      this.game[0] === this.game[2]
    ) {
      this.winMessage=`${this.game[0]} won`
    }
    //for row no 1 : 3,4,5
    else if (
      this.game[3] !== 'empty' &&
      this.game[3] === this.game[4] &&
      this.game[3] === this.game[5]
    ) {
      this.winMessage=`${this.game[3]} won`
    }
    //for row no 2 : 6,7,8
    else if (
      this.game[6] !== 'empty' &&
      this.game[6] === this.game[7] &&
      this.game[6] === this.game[8]
    ) {
      this.winMessage=`${this.game[6]} won`
    }

    //for columns 
    /* 
    0 1 2 
    3 4 5
    6 7 8 
    */
    //for column 0 : 0,3,6
    else if (
      this.game[0] !== 'empty' &&
      this.game[0] === this.game[3] &&
      this.game[0] === this.game[6]
    ) {
      this.winMessage=`${this.game[0]} won`
    }
    //for column 1 : 1,4,7
    else if (
      this.game[1] !== 'empty' &&
      this.game[1] === this.game[4] &&
      this.game[1] === this.game[7]
    ) {
      this.winMessage=`${this.game[1]} won`
    }
    //for column 2 : 2,5,8
    else if (
      this.game[2] !== 'empty' &&
      this.game[2] === this.game[5] &&
      this.game[2] === this.game[8]
    ) {
      this.winMessage=`${this.game[2]} won`
    }
    //for diagonals 
    /* 
    0 1 2 
    3 4 5
    6 7 8 
    */
    //for left diagonal 0,4,8
    else if (
      this.game[0] !== 'empty' &&
      this.game[0] === this.game[4] &&
      this.game[0] === this.game[8]
    ) {
      this.winMessage=`${this.game[0]} won`
    }
    //for right diagonal 2,4,6
    else if (
      this.game[2] !== 'empty' &&
      this.game[2] === this.game[4] &&
      this.game[2] === this.game[6]
    ) {
      this.winMessage=`${this.game[2]} won`
    }

  }

  handleClick(tileNumber){
    if(this.winMessage){
      return this.toastr.success(this.winMessage,'Game over')
    }

    if(this.game[tileNumber] === 'empty'){
      this.game[tileNumber] = this.isCross ? 'cross' : 'circle'
      
      this.isCross = !this.isCross
    }else{
      return this.toastr.info('this place is already filled')
    }

    if(this.game.indexOf('empty') === -1){
      return this.toastr.info('It\'s a draw \n Well played start a New Game')
    }
    this.checkWinner()
  }

  constructor(
    private toastr: ToastrService
  ) { }
}
