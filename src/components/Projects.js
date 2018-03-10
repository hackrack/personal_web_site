import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import concentration from "./AllProjects/concentration/Welcome";

const con = () => {
 return(
   <div>
    <concentration/>
   </div>
 )
}



class Projects extends React.Component {
    allProjects = () => {
      return(
        <div>
        <h1>Projects</h1>
        <h3> <Link to="/projects/concentration" >Concentration</Link></h3>
        <p>Concentration, also known as Match Match, Match Up, Memory,
        Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card
        game in which all of the cards are laid face down on a surface
        and two cards are flipped face up over each turn. The object
        of the game is to turn over pairs of matching cards.
        It is a particularly good game for young children,
        though adults may find it challenging and stimulating as well.
        The scheme is often used in quiz shows and can be employed as
        an educational game.</p>
        </div>
      )
    }

    render() {
      return(
        <div>
          <Switch>
            <Route exact path="/projects/" render={this.allProjects} />
            <Route path="/projects/concentration" component={concentration} />
          </Switch>
        </div>
      )
    }
}

export default Projects;
