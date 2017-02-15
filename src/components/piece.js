'use strict';

var React = require('react');

class Piece extends React.Component{
  constructor(){
    super();
  }

  getImage(){
    return (Math.random() < .5? 'X':'O');
  }

  render(){
    return (
      <div className='piece-div'><p className='game-piece'>{this.getImage()}</p></div>
    );
  }
}

module.exports = Piece;
