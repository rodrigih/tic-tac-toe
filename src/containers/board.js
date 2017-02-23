'use strict';

var React = require('react');
var Piece = require('../components/piece.js');

class Board extends React.Component{
  constructor(){
    super();
    this.state = this.getInitialState();
    this.placePiece = this.placePiece.bind(this);
  }

  getInitialState(){
    return {
      player: 'one',
      current: 'X',
      running: true,
      boardValues: Array.from(Array(9),() => '')
    };
  }

  changeTurn(){
    var next = (this.state.current == 'X'? 'O' : 'X');
    return next;
  }

  placePiece(index){
    var newBoard = this.state.boardValues.slice();

    /* Don't do anything if there is already a piece placed*/
    if(this.state.boardValues[index] !== ''){
      return;
    }

    newBoard[index] = this.state.current;

    this.setState({
      current: this.changeTurn(),
      boardValues: newBoard
    });
  }

  render(){
    console.log(this.state.boardValues);
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

        <a href="#" className='return-link' onClick={this.props.toMainMenu}>
          <span className='menu-item'>Main Menu</span></a>
      </div>
    );
  }
}

module.exports = Board;
