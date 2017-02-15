'use strict';

var React = require('react');
var Piece = require('../components/piece.js');

class Board extends React.Component{
  constructor(){
    super();
    this.state = this.getInitialState();
  }

  getInitialState(){
    return {
      player: 'one',
      current: 'x',
      running: true,
      board: []
    };
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
          It is now <span id='current' className='game-piece'> X </span>'s turn.
        </p></div>

        <div id='board'>
            <Piece value=''/>
            <Piece value=''/>
            <Piece value=''/>

            <Piece value=''/>
            <Piece value=''/>
            <Piece value=''/>

            <Piece value=''/>
            <Piece value=''/>
            <Piece value=''/>
        </div>

        <a href="#" className='return-link' onClick={this.props.toMainMenu}>
          <span className='menu-item'>Main Menu</span></a>
      </div>
    );
  }
}

module.exports = Board;
