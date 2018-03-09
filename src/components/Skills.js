import React, { Component } from "react";

import javascript from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import sql from "../images/sql.png";
import postgres from "../images/postgres.png";
import node from "../images/node.png";
import express from "../images/express.png";
import redux from "../images/redux.png";

let images = 
  [
    javascript, html, css, 
    react, sql, postgres, 
    node, express, redux
  ]
  
let styles = 
  {
    height: "200px",
    width: "200px"
  }
  
  
class Skills extends React.Component {

    render() {
      return(
        <div>
          <h1>Skills</h1>
            <div>
              {images.map( (image) => {
                return <img 
                    src={image} 
                    alt="skills_images" 
                    style={styles}
                    key={Math.floor(Math.random() * 1000)}
                  />
              })}
            </div>
        </div>
      )
    }
}

export default Skills;
