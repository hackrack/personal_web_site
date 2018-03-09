import React, { Component } from 'react';
import logo from './logo.svg';
// import { Link, Switch, Route } from "react-router-dom";
import './App.css';
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Umedjon Ibrohimov</h1>
        <h4>39 Wallis Ave, Jersey City, NJ, 07306</h4>
        <h4>
          <a href="https://www.linkedin.com/in/umedjon-ibrohimov/">
            LinkedIn
          </a>{" "}
          <a href="https://github.com/hackrack">GitHub</a>
        </h4>
        <br></br><br></br>
        {/*<nav>
          <Link to="/aboutme">About Me</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/skills">Skills</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/projects">Projects</Link>&nbsp;&nbsp;&nbsp;
        </nav>
        {/*<Switch>
          <Route path="/aboutme" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Switch>*/}
        <img src="file:///Users/c4q/Desktop/ibrohimov.jpg" alt="pic" />
      </div>
    );
  }
}

export default App;
