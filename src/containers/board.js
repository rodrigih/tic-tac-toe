'use strict';

var React = require('react');
var Piece = require('../components/piece.js');
var Computer = require('../classes/computer.js);
')
class Board extends React.Component{
  constructor(){
    super();
    this.state = this.getInitialState();
    this.placePiece = this.placePiece.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  getInitialState(){
    return {
      player: 'one',
      current: 'X',
      winner: '',
      boardValues: Array.from(Array(9),() => '')
    };
  }

  restartGame(){
    this.setState(this.getInitialState());
  }

  getWinnerScreen(){
    console.log(this.state.winner,this.state.winner === 'tied');
   var winnerHeading = (this.state.winner === 'tied' ?
                         "Game is tied":
                         this.state.winner + " is the winner");

    return (
      <div id='win-container'>
        <div id='win-menu'>
          <h1 id='title'>
            {winnerHeading}
          </h1>
          <a href="#" onClick={this.restartGame}>
            <span className='menu-item'>Play Again</span>
          </a>

          <a href="#" onClick={this.props.toMainMenu}>
            <span className='menu-item'>Main Menu</span>
          </a>
        </div>
      </div>
    );
  }

  changeTurn(){
    var next = (this.state.current == 'X'? 'O' : 'X');
    return next;
  }

  checkWinner(board){

    if(!board.includes('')){
      return 'tied';
    }

    var toCheck = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]];


    /* This checks if there is 3 in a row at each triplet shown in toCheck, then
    uses reduce get a single truth value indicating whether there is a winner or
    not. */
    var isWinner = toCheck.map( (current) => {
        return board.filter((c,i) => {return current.includes(i)})
             .reduce((acc,curr) => {return acc && (curr === this.state.current)},true);
      }).reduce((acc,curr) =>{return acc || curr},false);

    return (isWinner? this.state.current :'');
  }

  placePiece(index){
    var newBoard = this.state.boardValues.slice();

    /* Don't do anything if there is already a piece placed*/
    if(this.state.boardValues[index] !== ''){
      return;
    }

    newBoard[index] = this.state.current;

    var isWinner = this.checkWinner(newBoard);

    this.setState({
      current: this.changeTurn(),
      boardValues: newBoard,
      winner: this.checkWinner(newBoard)
    });

  }

  render(){
    return (
      <div className='column-container'>
        <h1 id='title'>Tic-Tac-Toe</h1>

        <div className='row-container'>
          <p className='general-paragraph'>P1: <span id='score1'>0</span></p>
          <p className='general-paragraph'>P2: <span id='score2'>0</span></p>
        </div>

        <div><p className='general-paragraph'>
          It is now <span id='current' className='game-piece'>
           {this.state.current}
            </span>'s turn.
        </p></div>

        <div id='board'>
            {this.state.boardValues.map(
              (current,i) => (<Piece value={current}
                                     key={i}
                                     index={i}
                                     placePiece={this.placePiece}/>))}
        </div>

        <a href="#" onClick={this.props.toMainMenu}>
          <span className='menu-item'>Main Menu</span></a>

        {(this.state.winner != '' ? this.getWinnerScreen(): '')}
      </div>

    );
  }
}

module.exports = Board;
