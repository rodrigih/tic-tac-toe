'use strict';

var React = require('react');

class Piece extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.placePiece(this.props.index);
  }

  render(){
    return (
      <div className='piece-div'
           onClick={this.handleClick}>
           <p className='game-piece'>{this.props.value}</p>
      </div>
    );
  }
}

module.exports = Piece;
