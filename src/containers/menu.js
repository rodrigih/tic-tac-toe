'use strict';

var React = require('react');

class Menu extends React.Component{
  constructor(){
    super();
    this.state = this.getInitialState();
  }

  getInitialState(){
    return {
      selected: 'main',
      options: {
        difficulty: 'easy',
        theme: 'default'
      }
    };
  }

  render(){
      return (
        <div id='main-menu'>
          <h1>Tic-Tac-Toe</h1>
          <a href='#'><span className='menu-item'>Single Player</span></a>
          <a href='#'><span className='menu-item'>Multi Player</span></a>
          <a href='#'><span className='menu-item'>Options</span></a>
          <a href='#'><span className='menu-item'>Credits</span></a>

        </div>);
  }

}

module.exports = Menu;
