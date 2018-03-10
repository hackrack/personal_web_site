import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './game.css';
import Game from './Game' 
import Welcome from './Welcome'
import themes from './themes'

const Select = ({name, themes, handler}) => {
  return (
    <select name={name} onChange={handler}>{
        Object.keys(themes).map(themeName => <option value={themeName}>{themeName}</option>)
    }</select>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      theme:'medieval'
    }
  }
 
  // handleSelectChange = (e) => {
  //   this.setState({
  //     theme: e.target.value
  //   })
  // }
  // 
  render(){
    console.log(this.state)
    return (
      <div>
        <Welcome />
        {/*<Select name='themeSelect' themes={themes} handler={this.handleSelectChange}/>*/}
        <Game theme=''/>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
