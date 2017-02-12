'use strict';

var React = require('react');
var Board = require('./board.js');
var Options = require('../components/options.js');

class Menu extends React.Component{
  constructor(){
    super();
    this.state = this.getInitialState();
    this.changeSelected = this.changeSelected.bind(this);
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

  handleChangeOptions(){
    return;
  }

  changeSelected(e){
    var newSelected = e.target.innerHTML.split(' ')[0].toLowerCase();
    console.log(newSelected);
    this.setState({selected: newSelected});
  }

  getMainMenu(){
    return (
      <div id='main-menu'>
        <h1>Tic-Tac-Toe</h1>
        <a href='#' onClick={this.changeSelected}>
          <span className='menu-item'>One Player</span></a>
        <a href='#'onClick={this.changeSelected}>
          <span className='menu-item'>Two Players</span></a>
        <a href='#'onClick={this.changeSelected}>
          <span className='menu-item'>Options</span></a>
        <a href='#'onClick={this.changeSelected}>
          <span className='menu-item'>Credits</span></a>

      </div>);
  }

  getBoard(){
    return <Board mode={this.state.selected}
                  theme={this.state.options.theme}
                  toMainMenu={this.changeSelected}/>
  }

  getOptionsMenu(){
    return <Options changeOptions={this.handleChangeOptions}
                    toMainMenu={this.changeSelected}/>
  }

  getCredits(){
    return (
      <div>
        <h1>Credits</h1>
        <a href="#" onClick={this.changeSelected}>
          <span className='menu-item'>Main Menu</span></a>
      </div>
    );
  }

  render(){
    var toRender;

    switch(this.state.selected){
      case 'one':
      case 'two':
        toRender = this.getBoard();
        break;
      case 'options':
        toRender = this.getOptionsMenu();
        break;
      case 'credits':
        toRender = this.getCredits();
        break;
      case 'main':
      default:
        toRender = this.getMainMenu();
        break;

    }
    return toRender;
  }

}

module.exports = Menu;
