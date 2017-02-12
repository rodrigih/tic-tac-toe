'use strict';

var React = require('react');

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
      <div>
        <h1>Game Board</h1>
        <ul>
          <li>{this.props.mode}</li>
          <li>{this.props.theme}</li>
        </ul>
        <a href="#" onClick={this.props.toMainMenu}>
          <span className='menu-item'>Main Menu</span></a>
      </div>
    );
  }
}

module.exports = Board;
