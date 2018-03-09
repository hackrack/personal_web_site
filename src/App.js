import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Switch, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/aboutme">About Me</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/skills">Skills</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/projects">Projects</Link>&nbsp;&nbsp;&nbsp;
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
