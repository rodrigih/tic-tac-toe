'use strict';

var React = require('react');
var Menu = require('../containers/menu.js');

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
        <Menu />
      );
  }

}

module.exports = App;
