'use strict';

var React = require('react');

class Options extends React.Component{
  constructor(){
    super();
    this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
    this.handleThemeClick = this.handleThemeClick.bind(this);
  }

  handleDifficultyClick(e){
    var difficultyOptions = ['easy','medium','hard'];
    var current = difficultyOptions.indexOf(this.props.options.difficulty);

    var index;

    if(e.target.className.includes('left')){
      index = (current - 1 < 0 ? difficultyOptions.length-1 : current - 1);
    }else{
      index = (current + 1) % difficultyOptions.length;
    }

    this.props.changeOptions('difficulty',difficultyOptions[index]);
  }

  handleThemeClick(e){
    var themeOptions = ['default', 'theme2', 'theme3'];
    var current = themeOptions.indexOf(this.props.options.theme);

    var index;

    if(e.target.className.includes('left')){
      index = (current - 1 < 0 ? themeOptions.length-1 : current - 1);
    }else{
      index = (current + 1) % themeOptions.length;
    }

    this.props.changeOptions('theme',themeOptions[index])
  }

  render(){

    var nextItem = (list,curr) =>{
      return (list.indexOf(curr) + 1) % list.length;
    }

    var prevItem = (list,curr) => {
      var prev =list.indexOf(curr) - 1;
      return (prev < 0 ? list.length-1 :prev);
    }

    return (
      <div className='column-container'>
        <h1> Options Menu </h1>

          <span className='menu-item'>
            Difficulty:
            <span className='glyphicon glyphicon-menu-left'
                  onClick={this.handleDifficultyClick}></span>
                  {this.props.options.difficulty}
            <span className='glyphicon glyphicon-menu-right'
                  onClick={this.handleDifficultyClick}></span>
          </span>

          <span className='menu-item'>
            Theme:
            <span className='glyphicon glyphicon-menu-left'
                  onClick={this.handleThemeClick}></span>
              {this.props.options.theme}
            <span className='glyphicon glyphicon-menu-right'
                  onClick={this.handleThemeClick}></span>
          </span>

        <a href="#" className='return-link'  onClick={this.props.toMainMenu}>
          <span className='menu-item'>Main Menu</span></a>
      </div>
    );
  }
/*
  render(){
    return (
      <div className='column-container'>
        <h1>Options Menu</h1>
        <a href="#" className='return-link'  onClick={this.props.toMainMenu}>
          <span className='menu-item'>Main Menu</span></a>
      </div>
    );
  }
  */
}

module.exports = Options;
