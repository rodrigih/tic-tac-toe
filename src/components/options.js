'use strict';

var React = require('react');

class Options extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className='column-container'>
        <h1>Options Menu</h1>
        <a href="#" className='return-link'  onClick={this.props.toMainMenu}>
          <span className='menu-item'>Main Menu</span></a>
      </div>
    );
  }
}

module.exports = Options;
