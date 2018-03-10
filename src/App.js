import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Switch, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Resume from "./components/Resume";



class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/about">About Me</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/skills">Skills</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/projects">Projects</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/resume">Resume</Link>&nbsp;
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default App;
